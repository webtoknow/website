import React, { type ReactNode } from "react";
import BlogPostItemHeaderTitle from "@theme/BlogPostItem/Header/Title";
import BlogPostItemHeaderInfo from "@theme/BlogPostItem/Header/Info";
import BlogPostItemHeaderAuthors from "@theme/BlogPostItem/Header/Authors";
import Image from "@theme/IdealImage";
import { useBlogPost } from "@docusaurus/plugin-content-blog/lib/client/contexts.js";
import clsx from "clsx";

import styles from "./styles.module.css";
import TagsNav from "@site/src/components/TagsNav";

export default function BlogPostItemHeader(): ReactNode {
  const {
    isBlogPostPage,
    metadata: {
      frontMatter: { image },
      title: postTitle,
      tags: tagsList,
    },
  } = useBlogPost();

  return (
    <header className={clsx(isBlogPostPage && styles.header)}>
      <section className={clsx(styles.info)}>
        <BlogPostItemHeaderTitle />
        {isBlogPostPage && (
          <TagsNav
            className={clsx(styles.tagList)}
            tags={tagsList}
            size="sm"
          ></TagsNav>
        )}
        <BlogPostItemHeaderInfo className={clsx(styles.date)} />
        {isBlogPostPage && <BlogPostItemHeaderAuthors />}
      </section>
      {isBlogPostPage && (
        <Image img={image} alt={postTitle} className={clsx(styles.image)} />
      )}
    </header>
  );
}
