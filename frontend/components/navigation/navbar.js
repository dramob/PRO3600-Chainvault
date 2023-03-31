import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="https://enseignements.telecom-sudparis.eu/fiche.php?m=21069" target={"_blank"}>
				<img
					className={styles.chainvault}
					src="/chainvault.svg"
				></img>
			</a>
			<div className={styles.navLinks}>
                <a href="/" className={styles.navLink}>Accueil</a>
                <a href="/APropos" className={styles.navLink}>À propos</a>
                <a href="/NousContacter" className={styles.navLink}>Contact</a>
				<a href="/NotreEquipe" className={styles.navLink}>Notre Equipe</a>
            </div>
			<ConnectButton></ConnectButton>
			
		     
		</nav>
	);
}
