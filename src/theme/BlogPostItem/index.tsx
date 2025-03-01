import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import BlogPostItemContainer from '@theme/BlogPostItem/Container';
import BlogPostItemHeader from '@theme/BlogPostItem/Header';
import BlogPostItemContent from '@theme/BlogPostItem/Content';
import BlogPostItemFooter from '@theme/BlogPostItem/Footer';
import Image from "@theme/IdealImage";
import type {Props} from '@theme/BlogPostItem';

import styles from './styles.module.css';


// apply a bottom margin in list view
function useContainerClassName() {
  const {isBlogPostPage} = useBlogPost();
  return !isBlogPostPage ? 'margin-bottom--xl' : undefined;
}

export default function BlogPostItem({children, className}: Props): ReactNode {
  const containerClassName = useContainerClassName();
  const {
    isBlogPostPage,
    metadata: {
      title: postTitle,
      frontMatter: { image },
    },
  } = useBlogPost();


  return (
    <BlogPostItemContainer className={clsx(containerClassName, className, !isBlogPostPage && styles.article)}>
      {!isBlogPostPage && <Image img={image} alt={postTitle} className={clsx(styles.image)} /> }
      <div>
        <BlogPostItemHeader />
        <BlogPostItemContent>{children}</BlogPostItemContent>
        <BlogPostItemFooter />
      </div>
    </BlogPostItemContainer>
  );
}
