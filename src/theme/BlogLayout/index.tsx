import React, { useContext, type ReactNode } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import BlogSidebar from "@theme/BlogSidebar";

import type { Props } from "@theme/BlogLayout";
import { useLocation } from "@docusaurus/router";

import styles from './styles.module.css';

export default function BlogLayout(props: Props): ReactNode {
  const { sidebar, toc, children, ...layoutProps } = props;
  const { pathname } = useLocation();
  const isBlogPostDetailsPage: boolean = /^\/blog\/(?!tags\/?)[^/]+$/.test(pathname);

  return (
    <Layout {...layoutProps}>
      <div className="container margin-vert--lg">
        <div className="row">
          <BlogSidebar sidebar={sidebar} />
          <main
            className={clsx("col", {
              "col--9": isBlogPostDetailsPage,
              "col--12": !isBlogPostDetailsPage,
            })}
          >
            {children}
          </main>
          {toc && (
            <aside
              className={clsx("col col--3", isBlogPostDetailsPage && styles.aside)}
            >
              {toc}
            </aside>
          )}
        </div>
      </div>
    </Layout>
  );
}
