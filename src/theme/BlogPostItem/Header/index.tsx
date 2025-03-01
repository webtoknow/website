import React, {type ReactNode} from 'react';
import BlogPostItemHeaderTitle from '@theme/BlogPostItem/Header/Title';
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info';
import BlogPostItemHeaderAuthors from '@theme/BlogPostItem/Header/Authors';
import Image from "@theme/IdealImage";
import { useBlogPost } from '@docusaurus/plugin-content-blog/lib/client/contexts.js';
import clsx from 'clsx';

import styles from './styles.module.css';


export default function BlogPostItemHeader(): ReactNode {
   const {isBlogPostPage,  metadata: {
    frontMatter: { image },
    title: postTitle,
  },} = useBlogPost();

  return (
    <header className={clsx(isBlogPostPage && styles.header)}>
      <BlogPostItemHeaderTitle />
      <BlogPostItemHeaderInfo />
      {isBlogPostPage && <BlogPostItemHeaderAuthors />}
      {isBlogPostPage && <Image img={image} alt={postTitle} className={clsx(styles.image)} /> }
    </header>
  );
}
