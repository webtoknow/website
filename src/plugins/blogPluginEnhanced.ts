import type { LoadContext, Plugin } from "@docusaurus/types";
import blogPlugin from "@docusaurus/plugin-content-blog";
import type { PluginOptions as BlogPluginOptions } from "@docusaurus/plugin-content-blog";

// @ts-expect-error: fixed in v3.8, see https://github.com/facebook/docusaurus/pull/10929
export { validateOptions } from "@docusaurus/plugin-content-blog";

export default async function blogPluginEnhanced(
  context: LoadContext,
  options: BlogPluginOptions
): Promise<Plugin> {
  const blogPluginInstance = (await blogPlugin(context, options)) as Plugin;

  return {
    ...blogPluginInstance,

    async contentLoaded({ content, actions }) {
      await blogPluginInstance.contentLoaded({ content, actions });

      const recentPostsLimit = 3;
      const recentPosts = content["blogPosts"]
        .filter((_, index) => index < recentPostsLimit)
        .map((post) => ({
          title: post.metadata.title,
          date: post.metadata.date,
          permalink: post.metadata.permalink,
          tags: post.metadata.tags,
          readingTime: post.metadata.readingTime,
          authors: post.metadata.authors.map((author) => ({
            name: author.name,
            key: author.key,
            permalink: author.page.permalink,
            page: author.page,
          })),
          description: post.metadata.description,
          image: post.metadata.frontMatter.image,
        }));

      const { setGlobalData } = actions;
      const { blogTags } = content as unknown as { blogTags: Record<string, { label: string; permalink: string; description: string }> };
      const allTags = Object.values(blogTags).map(({ label, permalink, description }) => ({
        label,
        permalink,
        description,
      }));

      setGlobalData({ allTags, recentPosts });
    },
  };
}
