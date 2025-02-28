import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import blogPluginEnhanced from "./src/plugins/blogPluginEnhanced";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Web to know",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://webtoknow.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "webtoknow", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/projects",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 85,
        disableInDev: false,
      },
    ],
    [
      blogPluginEnhanced,
      {
        path: "blog",
        routeBasePath: "blog",
        postsPerPage: "ALL",
        blogSidebarCount: 0,
        showReadingTime: true,
        feedOptions: {
          type: ["rss", "atom"],
          xslt: true,
        },
        editUrl:
          "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        onInlineTags: "warn",
        onInlineAuthors: "warn",
        onUntruncatedBlogPosts: "warn",
      },
    ],
  ],

  headTags: [
    {
      tagName: "link",
      attributes: {
        href: "https://fonts.googleapis.com/css2?family=Urbanist:wght@600..800&display=swap",
        rel: "stylesheet",
      },
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Home",
      logo: {
        alt: "Web to know logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Projects",
        },
        { to: "/blog", label: "Blog", position: "left" },
        { to: "/about", label: "About us", position: "left" },
        {
          href: "https://github.com/webtoknow/website",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Useful links",
          items: [
            {
              label: "Project",
              to: "/projects/intro",
            },
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "About us",
              to: "/about",
            },
          ],
        },
        {
          title: "Other Projects",
          items: [
            {
              label: "CSS Press",
              href: "https://webtoknow.github.io/CSS-Press/",
            },
            {
              label: "Human in Learning",
              href: "https://humansinlearning.ro/",
            },
            {
              label: "Finance Computing Master",
              href: "https://financial-computing.upb.ro/",
            },
          ],
        },
        {
          title: "Folow us",
          items: [
            {
              label: "Youtube",
              href: "https://www.youtube.com/watch?v=_hJXIVPQhDo",
            },
            {
              label: "GitHub",
              href: "https://github.com/webtoknow",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Web to know`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
