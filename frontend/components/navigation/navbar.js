// Importation du composant ConnectButton depuis la bibliothèque Rainbowkit de "@rainbow-me/rainbowkit"
import { ConnectButton } from "@rainbow-me/rainbowkit";

// Importation des styles du fichier "../styles/Navbar.module.css"
import styles from "../../styles/Navbar.module.css";

// Définition d'une fonction Navbar
export default function Navbar() {
	// La fonction Navbar retourne le contenu JSX suivant :
	return (
		<nav className={styles.navbar}>
			{/* Un lien hypertexte vers une page externe avec une image affichée */}
			<a href="https://enseignements.telecom-sudparis.eu/fiche.php?m=21069" target={"_blank"}>
				<img
					className={styles.chainvault}
					src="/chainvault.svg"
				></img>
			</a>
			{/* Une section contenant plusieurs liens hypertexte */}
			<div className={styles.navLinks}>
                <a href="/" className={styles.navLink}>Accueil</a>
                <a href="/APropos" className={styles.navLink}>À propos</a>
                <a href="/NousContacter" className={styles.navLink}>Contact</a>
				<a href="/NotreEquipe" className={styles.navLink}>Notre Equipe</a>
            </div>
			{/* Affichage du composant ConnectButton */}
			<ConnectButton></ConnectButton>
		</nav>
	);
}
