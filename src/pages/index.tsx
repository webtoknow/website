import type { ReactNode } from "react";
import clsx from "clsx";
import { useColorMode } from "@docusaurus/theme-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageRecentPosts from "@site/src/components/HomepageRecentPosts";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import Title from "../components/Title/Title";
import HomeSvg from './undraw-home.svg';
import { DocusaurusConfig } from "@docusaurus/types";

interface HomepageHeroProps {
  siteConfig: DocusaurusConfig;
}

function HomepageHero({ siteConfig }: HomepageHeroProps) {
  const { colorMode } = useColorMode();

  return (
    <section className={clsx(styles.heroBanner)}>
      <Heading as="h1" className={clsx(styles.heroTitle)}>
        Explore, Learn, Undestand:
        <br/>
        Welcome to
        <mark className={clsx(styles.heroMark)}> {siteConfig.title}</mark>!
      </Heading>
      <HomeSvg className={clsx(styles.heroImage)} />
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={'Explore, Learn, Undestand: Welcome to ' + siteConfig.title}
      description="At Webtoknow, we're dedicated to delivering the latest updates on web technologies, IOT, security, and IT jobs."
    >
      <main className="container margin-vert--lg">
        <HomepageHero siteConfig={siteConfig} />
        <Title title="The latest" />
        <HomepageRecentPosts />
      </main>
    </Layout>
  );
}
