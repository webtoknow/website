import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';


interface TitleProps {
    title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
    return <h2 className={clsx(styles.title)}>{title}</h2>;
};

export default Title;