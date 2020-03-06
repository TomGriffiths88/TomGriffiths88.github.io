import React from 'react';
import styles from './FilterToken.module.css';

const filterToken = (props) => {

    let curStyles = [styles.FilterToken];
    if (props.filter === props.children) {
        curStyles = [styles.FilterToken, styles.active];
    }

    return(
        <button className={curStyles.join(' ')} onClick={props.click}>{props.children}</button>
    )
}
    


export default filterToken;