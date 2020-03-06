import React from 'react';
import styles from './Footer.module.css';

const footer = () => {

    const year = new Date().getFullYear();

    return(
        <footer className={styles.Footer}>
           <p>&copy; {year} Tom Patrick. All rights reserved.</p> 
        </footer>
    )

}
  

export default footer;