
// Importation du composant Navbar depuis le fichier '../components/navigation/navbar'
import Navbar from "../components/navigation/navbar";

// Importation du composant Header depuis le fichier '../components/Header'
import { Header } from "../components/Header";

// Importation du composant Footer depuis le fichier '../components/Footer'
import Footer from "../components/Footer";

// Définition d'une fonction MainLayout qui prend un paramètre 'children'
export default function MainLayout({ children }) {
	// La fonction MainLayout retourne le contenu JSX suivant :
	return (
		<div>
			{/* Affichage du composant Navbar */}
            <Navbar />

			{/* Affichage du contenu passé en paramètre de la fonction MainLayout */}
			{children}

			{/* Affichage du composant Footer */}
			<Footer/>
		</div>
	);
}
