import React, {useContext, type ReactNode} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import BlogSidebar from '@theme/BlogSidebar';

import type {Props} from '@theme/BlogLayout';
import useRouteContext from '@docusaurus/useRouteContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useLocation } from '@docusaurus/router';

export default function BlogLayout(props: Props): ReactNode {
  const {sidebar, toc, children, ...layoutProps} = props;
  const {pathname} = useLocation();
  const isBlogPostPage = pathname.includes('/blog/');

  return (
    <Layout {...layoutProps}>
      <div className="container margin-vert--lg">
        <div className="row">
         <BlogSidebar sidebar={sidebar} />
          <main
            className={clsx('col', {
              'col--12': !isBlogPostPage,
              'col--9': isBlogPostPage,
            })}>
            {children}
          </main>
          {toc && <div className="col col--3">{toc}</div>}
        </div>
      </div>
    </Layout>
  );
}
