import React from 'react';
import styles from '../styles/Header.module.css';

const Header = ({ title, subtitle }) => {
        return (
          <header className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </header>
        );
      };
      
      export default Header;