// Importation de React et des styles du fichier '../styles/APropos.module.css'
import React from 'react';
import styles from '../styles/APropos.module.css';

// Importation du composant Header depuis le fichier '../components/Header'
import Header from '../components/Header';

// Définition d'une fonction  APropos
const APropos = () => {
  return (
    <div className={styles.content}>
      {/* Affichage du composant Header avec un titre et un sous-titre */}
      <Header title="À propos" subtitle="Information sur notre entreprise et notre équipe." />
      {/* Paragraphe expliquant comment la technologie blockchain est utilisée pour stocker et échanger des documents sensibles en toute sécurité */}
      <p className={styles.blockchain}>
        Notre plateforme utilise la technologie blockchain pour authentifier la possession de documents sensibles. 
        Grâce à la décentralisation et à la sécurité offertes par la blockchain, nous pouvons garantir que les documents sont 
        stockés et échangés de manière sécurisée. Les détenteurs de documents peuvent prouver leur possession sans révéler 
        le contenu des documents, préservant ainsi leur confidentialité.
      </p>
    </div>
  );
};

// Exportation du composant APropos par défaut
export default APropos;
