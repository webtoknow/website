import React, { type ReactNode } from "react";
import { BlogPostProvider, useBlogPost } from "@docusaurus/plugin-content-blog/client";
import { useLocation } from "@docusaurus/router";
import useGlobalData from "@docusaurus/useGlobalData";
import BlogPostItem from "@theme/BlogPostItem";
import type { Props } from "@theme/BlogPostItems";
import TagsNav from "@site/src/components/TagsNav";

import styles from './styles.module.css';
import clsx from "clsx";

export default function BlogPostItems({
  items,
  component: BlogPostItemComponent = BlogPostItem,
}: Props): ReactNode {
  const globalData = useGlobalData();
  const tags = globalData["docusaurus-plugin-content-blog"].default["allTags"];
  const { pathname } = useLocation();
  const isBlogTagsPage: boolean = /^\/blog\/tags\/.+$/.test(pathname);
  const isBlogPostListOrTagsPage: boolean = /^\/blog(\/tags\/.*)?$/.test(pathname);
  return (
    <>
      <section aria-labelledby="articles-heading">
        <h1 className={clsx(styles.title)} id="articles-heading">Articles</h1>
        <p className={clsx(styles.no)}>{items.length} articles</p>
      </section>

      {isBlogPostListOrTagsPage && <TagsNav tags={tags} showAllArticles={isBlogTagsPage} showAllTags={isBlogTagsPage} pathname={pathname} />}

      {items.map(({ content: BlogPostContent }) => (
        <BlogPostProvider
          key={BlogPostContent.metadata.permalink}
          content={BlogPostContent}
        >
          <BlogPostItemComponent>
            <BlogPostContent />
          </BlogPostItemComponent>
        </BlogPostProvider>
      ))}
    </>
  );
}
