import React from 'react';
import styles from './PostsGrid.module.css';

const postsGrid = (props) => (
    <div className={styles.PostsGrid}>
        {props.children}
    </div>
)

export default postsGrid;