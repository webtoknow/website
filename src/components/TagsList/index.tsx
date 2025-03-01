import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";

import styles from "./styles.module.css";

interface Tag {
  inline: boolean;
  label: string;
  permalink: string;
  description: string;
}

interface TagsListProps {
  tags: Tag[];
  size?: "sm" | "md";
  showAllArticles?: boolean;
  className?: string;
}

const TagsList: React.FC<TagsListProps> = ({ tags, showAllArticles, size = 'md', className }) => {
  return (
    <section className={clsx(styles.wrapper, className)}>
      {tags.map((tag, index) => (
        <Link
          key={index}
          className={clsx(styles.link, size === 'sm' && styles.linkSmall )}
          to={tag.permalink}
          title={tag.description}
        >
          {tag.label}
        </Link>
      ))}

      {showAllArticles && (
        <Link className={clsx(styles.all, size === 'sm' && styles.allSmall )} to="/blog" title="Go to blog page">
          See all articles
        </Link>
      )}
    </section>
  );
};

export default TagsList;
