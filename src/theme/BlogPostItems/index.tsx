import React, { type ReactNode } from "react";
import { BlogPostProvider } from "@docusaurus/plugin-content-blog/client";
import { useLocation } from "@docusaurus/router";
import useGlobalData from "@docusaurus/useGlobalData";
import BlogPostItem from "@theme/BlogPostItem";
import type { Props } from "@theme/BlogPostItems";
import TagsList from "@site/src/components/TagsList";

export default function BlogPostItems({
  items,
  component: BlogPostItemComponent = BlogPostItem,
}: Props): ReactNode {
  const globalData = useGlobalData();
  const tags = globalData["docusaurus-plugin-content-blog"].default['allTags'];
  const { pathname } = useLocation();
  return (
    <>
      <h1>Articles</h1>

      <TagsList tags={tags} path={pathname} />

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
