// Importation de React et des styles du fichier '../styles/NotreEquipe.module.css'
import React from 'react';
import styles from '../styles/NotreEquipe.module.css';

// Importation du composant Header depuis le fichier '../components/Header'
import Header from '../components/Header';

// Définition d'une fonction fléchée nommée NotreEquipe
const NotreEquipe = () => {
  // Définition d'un tableau d'objets contenant les informations des membres de l'équipe
  const teamMembers = [
    { id: 1, name: 'Alia', description: 'Développeur front', photo: '/alia.jpeg' },
    { id: 2, name: 'Neil', description: 'Developpeur blockchain', photo: '/neil.jpeg' },
    { id: 3, name: 'Mohammed ', description: 'Developpeur blockchain/Front', photo: '/akli.jpeg' },
    { id: 4, name: 'Adnene', description: 'Developpeur blockhain', photo: '/adnene.jpeg' },
  ];

  // La fonction NotreEquipe retourne le contenu JSX suivant :
  return (
    <div className={styles.content}>
      {/* Affichage du composant Header avec un titre et un sous-titre */}
      <Header title="Notre équipe" subtitle="Rencontrez nos membres" />
      {/* Utilisation d'une grille CSS pour afficher les membres de l'équipe */}
      <div className={styles.teamGrid}>
        {/* Boucle de rendu pour chaque membre de l'équipe */}
        {teamMembers.map((member) => (
          <div key={member.id} className={styles.teamMember}>
            <img className={styles.memberPhoto} src={member.photo} alt={member.name} />
            <h3 className={styles.memberName}>{member.name}</h3>
            <p className={styles.memberDescription}>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Exportation du composant NotreEquipe par défaut
export default NotreEquipe;
