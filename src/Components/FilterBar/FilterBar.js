import React from 'react';
import styles from './FilterBar.module.css';
import FilterToken from './FilterToken/FilterToken';

const filterBar = (props) => {

    const allLabels = props.posts.map(post => post.label);
    let uniqueLabels = new Set(allLabels);
    uniqueLabels = [...uniqueLabels];
    const tokens = uniqueLabels.map(label => <FilterToken key={label} click={props.click} filter={props.filter}>{label}</FilterToken>);


    return (
        <div className={styles.FilterBar}>
            <FilterToken key="all" click={props.click} filter={props.filter}>All</FilterToken>
            {tokens}
        </div>
    )

}

export default filterBar;