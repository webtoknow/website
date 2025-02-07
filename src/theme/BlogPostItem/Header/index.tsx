import React, {type ReactNode} from 'react';
import BlogPostItemHeaderTitle from '@theme/BlogPostItem/Header/Title';
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info';
import BlogPostItemHeaderAuthors from '@theme/BlogPostItem/Header/Authors';
import { useBlogPost } from '@docusaurus/plugin-content-blog/lib/client/contexts.js';
import clsx from 'clsx';

import styles from './styles.module.css';


export default function BlogPostItemHeader(): ReactNode {
   const {isBlogPostPage,  metadata: {
    frontMatter: { image },
  },} = useBlogPost();

  return (
    <header className={clsx(isBlogPostPage && styles.header)}>
      <BlogPostItemHeaderTitle />
      <BlogPostItemHeaderInfo />
      {isBlogPostPage && <BlogPostItemHeaderAuthors />}
      {isBlogPostPage && <img src={image} className={clsx(styles.image)} alt="Blog Image" />}
    </header>
  );
}
