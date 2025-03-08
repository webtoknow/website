import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import clsx from "clsx";
import { useColorMode } from "@docusaurus/theme-common";
import { DocusaurusConfig } from "@docusaurus/types";

import AboutSvg from "./undraw-about.svg";
import LinkedinSvg from "./linkedin-square.svg";
import MicrochipSvg from "./microchip.svg";
import TargetSvg from "./target.svg";
import ComputerSvg from "./computer-alt.svg";

import styles from "./index.module.css";

interface AboutHeroProps {
  siteConfig: DocusaurusConfig;
}

function AboutHero({ siteConfig }: AboutHeroProps) {
  const { colorMode } = useColorMode();

  return (
    <section className={clsx(styles.heroBanner)}>
      <Heading as="h1" className={clsx(styles.heroTitle)}>
        About us
      </Heading>
      <AboutSvg className={clsx(styles.heroImage)} />
    </section>
  );
}

export default function About(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main className="container margin-vert--lg">
        <AboutHero siteConfig={siteConfig} />
        <article className={clsx(styles.wrapper)}>
          <header className={clsx(styles.iconWrapper)}>
            <TargetSvg className={clsx(styles.icon, styles.invertedIcon)} />
          </header>
          <section>
            <h2 className={clsx(styles.title)}>01. Our mission</h2>
            <p className={clsx(styles.text)}>
              At Webtoknow, we're dedicated to delivering the latest updates on
              web technologies, IOT, security, and IT jobs. Our blog is your
              go-to source for in-depth tutorials and informative articles
              designed to enrich your knowledge in these areas. Our mission is
              to deliver high-quality, informative content that empowers our
              audience to navigate the ever-evolving world of technology with
              confidence.{" "}
            </p>
          </section>
        </article>
        <article className={clsx(styles.wrapper, styles.invertedWrapper)}>
          <header
            className={clsx(styles.iconWrapper, styles.invertedIconWrapper)}
          >
            <ComputerSvg className={clsx(styles.icon)} />
          </header>
          <section className={clsx(styles.invertedSection)}>
            <h2 className={clsx(styles.title)}>02. Web development</h2>
            <p className={clsx(styles.text)}>
              Whether you're a novice seeking to grasp the fundamentals of web
              development or a seasoned professional aiming to stay on top of
              the latest trends, our blog caters to your needs. We cover a
              diverse range of topics, including popular web development
              frameworks like React, Angular, and Vue, as well as back-end
              technologies such as Node.js, Java, and Spring
            </p>
          </section>
        </article>
        <article className={clsx(styles.wrapper)}>
          <header className={clsx(styles.iconWrapper)}>
            <MicrochipSvg className={clsx(styles.icon, styles.invertedIcon)} />
          </header>
          <section>
            <h2 className={clsx(styles.title)}>03. IOT and security</h2>
            <p className={clsx(styles.text)}>
              We provide comprehensive tutorials on setting up and utilizing IOT
              devices, including renowned platforms like Raspberry Pi and
              Arduino. Our blog also delves into various security topics,
              offering valuable insights and the latest cybersecurity
              developments to help safeguard your online presence.
            </p>
          </section>
        </article>
        <article className={clsx(styles.wrapper, styles.invertedWrapper)}>
          <header
            className={clsx(styles.iconWrapper, styles.invertedIconWrapper)}
          >
            <LinkedinSvg className={clsx(styles.icon)} />
          </header>
          <section className={clsx(styles.invertedSection)}>
            <h2 className={clsx(styles.title)}>04. Job Market</h2>
            <p className={clsx(styles.text)}>
              We offer a dedicated IT jobs section offers insights into the
              current job market landscape, featuring the latest job openings
              and providing valuable tips for job seekers.
            </p>
          </section>
        </article>

        <blockquote className={clsx(styles.blockquote)}>
          Join us as we explore the exciting realms of web technologies, IoT,
          security, and IT jobs, and learn together about the topics we care
          about every day.
        </blockquote>

        <h2>Team</h2>

        <article>
          <h3>Bogdan Mihai Nicolae</h3>
          <p>
            Hi, I'm Dana and I'm a skilled software engineer and instructor with
            expertise in web technologies and frameworks such as HTML, CSS,
            JavaScript, SQL, Angular, AngularJS, Java, and Spring. I enjoys
            sharing my knowledge and experience with others to help them enhance
            their skills. In my leisure time I enjoy hiking and dancing.
          </p>
        </article>

        <article>
          <h3>Dana Maria Nicolae</h3>
          <p>
            Hi, I'm Bogdan, an engineer with multiple industries experience and
            a passion for building secure, user-friendly applications. I embrace
            change, mentor my colleagues, and keep up with the latest tech
            trends. In my free time, I love creating engaging content across
            different platforms.
          </p>
        </article>
      </main>
    </Layout>
  );
}
