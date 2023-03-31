// components/Contact.js
import React from 'react';
import styles from '../styles/Contact.module.css';

const NousContacter = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Nous contacter</h1>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nom :</label>
          <input type="text" id="name" className={styles.formControl} />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email :</label>
          <input type="email" id="email" className={styles.formControl} />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Message :</label>
          <textarea id="message" className={styles.formControl}></textarea>
        </div>

        <button type="submit" className={styles.submitButton}>Envoyer</button>
      </form>
    </div>
  );
};

export default NousContacter;
