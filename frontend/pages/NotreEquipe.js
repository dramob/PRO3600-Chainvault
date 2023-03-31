// components/NotreEquipe.js
import React from 'react';
import styles from '../styles/NotreEquipe.module.css';
import Header from '../components/Header';

const NotreEquipe = () => {
  const teamMembers = [
    { id: 1, name: 'Alia', description: 'Développeur front', photo: '/alia.jpeg' },
    { id: 2, name: 'Neil', description: 'Developpeur blockchain', photo: '/neil.jpeg' },
    { id: 3, name: 'Mohammed ', description: 'Developpeur blockchain/Front', photo: '/akli.jpeg' },
    { id: 4, name: 'Adnene', description: 'Developpeur blockhain', photo: '/adnene.jpeg' },
  ];

  return (
    <div className={styles.content}>
      <Header title="Notre équipe" subtitle="Rencontrez nos membres" />
      <div className={styles.teamGrid}>
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

export default NotreEquipe;
