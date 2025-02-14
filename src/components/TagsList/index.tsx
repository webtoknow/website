import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";

import styles from "./styles.module.css";

interface Tag {
  inline: boolean;
  label: string;
  permalink: string;
  description: string;
  items: string[];
  unlisted: boolean;
}

interface TagsListProps {
  tags: Tag[];
  path: string;
}

const TagsList: React.FC<TagsListProps> = ({ tags, path }) => {
  return (
    <section className={clsx(styles.wrapper)}>
      {tags.map((tag, index) => (
        <Link
          key={index}
          className={clsx(styles.link)}
          to={tag.permalink}
          title={tag.description}
        >
          {tag.label}
        </Link>
      ))}

      {path !== "/blog" && (
        <Link className={clsx(styles.all)} to="/blog" title="Go to blog page">
          See all articles
        </Link>
      )}
    </section>
  );
};

export default TagsList;
