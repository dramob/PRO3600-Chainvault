import React from 'react';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header title="Accueil" subtitle="Bienvenue sur notre site !" />
      <main className={styles.main}>
        {/* ... contenu de la page ... */}
      </main>
    </div>
  );
}