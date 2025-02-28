import type { ReactNode } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import useGlobalData from "@docusaurus/useGlobalData";
import Image from "@theme/IdealImage";
import BlogPostItemFooterReadMoreLink from "@site/src/theme/BlogPostItem/Footer/ReadMoreLink";
import { Authors, DateTime, ReadingTime, Spacer } from "@site/src/theme/BlogPostItem/Header/Info";
import { useDateTimeFormat } from "@docusaurus/theme-common/internal";
import Link from "@docusaurus/Link";

type recentPostProps = {
  recentPosts: {
    title: string;
    date: string;
    permalink: string;
    image: string;
    tags: {
      inline: boolean;
      label: string;
      permalink: string;
      description: string;
    }[];
    readingTime: number;
    authors: {
      name: string;
      permalink: string;
      key: string;
    }[];
    description: string;
  }[];
};

function recentPostsItems({ recentPosts }: recentPostProps): ReactNode {
   const dateTimeFormat = useDateTimeFormat({
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'UTC',
    });
  
  const formatDate = (blogDate: string) =>
    dateTimeFormat.format(new Date(blogDate));
  return recentPosts.map((post) => (
    <article className={clsx(styles.article)} key={post.permalink}>
      <Image img={post.image} alt={post.title} className={clsx(styles.image)} />
      <div>
        <header>
          <h2 className={clsx(styles.title)}>
            <Link className={clsx(styles.link)} to={post.permalink}>{post.title}</Link>
          </h2>
         

          <p className={clsx(styles.info)}>
            <Authors authors={post.authors} />
            <DateTime date={post.date} formattedDate={formatDate(post.date)} />
            {typeof post.readingTime !== "undefined" && (
              <>
                <Spacer />
                <ReadingTime readingTime={post.readingTime} />
              </>
            )}
          </p>
        </header>
        <p className={clsx(styles.description)}>{post.description}</p>
        <BlogPostItemFooterReadMoreLink
          blogPostTitle={post.title}
          to={post.permalink}
        />
      </div>
    </article>
  ));
}

export default function HomepageRecentPosts(): ReactNode {
  const globalData = useGlobalData();
  const recentPosts =
    globalData["docusaurus-plugin-content-blog"].default["recentPosts"];
  return (
    <section className={clsx(styles.postlist)}>
      {recentPostsItems({ recentPosts })}
    </section>
  );
}
