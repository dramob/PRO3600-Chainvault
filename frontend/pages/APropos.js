// APropos.js
import React from 'react';
import styles from '../styles/APropos.module.css';
import Header from '../components/Header';
const APropos = () => {
  return (
    <div className={styles.content}>
      <Header title="À propos" subtitle="Information sur notre entreprise et notre équipe." />
      <p className={styles.blockchain}>
        Notre plateforme utilise la technologie blockchain pour authentifier la possession de documents sensibles. 
        Grâce à la décentralisation et à la sécurité offertes par la blockchain, nous pouvons garantir que les documents sont 
        stockés et échangés de manière sécurisée. Les détenteurs de documents peuvent prouver leur possession sans révéler 
        le contenu des documents, préservant ainsi leur confidentialité.
      </p>
    </div>
  );
};

export default APropos;
