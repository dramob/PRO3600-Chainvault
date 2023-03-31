// Importation des fichiers CSS globaux et de Rainbowkit
import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

// Importation des fonctions et des chaînes de configuration de Wagmi
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import {
	mainnet,
	polygon,
	optimism,
	arbitrum,
	goerli,
	polygonMumbai,
	optimismGoerli,
	arbitrumGoerli,
} from "wagmi/chains";

// Importation des fournisseurs Alchemy et public de Wagmi
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

// Importation du composant MainLayout depuis le fichier '../layout/mainLayout'
import MainLayout from "../layout/mainLayout";

// Configuration des chaînes et des fournisseurs de Wagmi
const { chains, provider } = configureChains(
	[
		mainnet,
		goerli,
		polygon,
		polygonMumbai,
		optimism,
		optimismGoerli,
		arbitrum,
		arbitrumGoerli,
	],
	[alchemyProvider({ apiKey: process.env.ALCHEMY_API_KEY }), publicProvider()]
);

// Récupération des connecteurs par défaut de Rainbowkit
const { connectors } = getDefaultWallets({
	appName: "My Alchemy DApp",
	chains,
});

// Création d'un client Wagmi
const wagmiClient = createClient({
	autoConnect: true,
	connectors,
	provider,
});

// Exportation des objets nécessaires pour utiliser Rainbowkit et Wagmi
export { WagmiConfig, RainbowKitProvider };

// Définition d'une fonction MyApp qui prend les composants Component et pageProps en paramètres
function MyApp({ Component, pageProps }) {
	// La fonction MyApp retourne le contenu JSX suivant :
	return (
		<WagmiConfig client={wagmiClient}>
			<RainbowKitProvider
				modalSize="compact"
				initialChain={process.env.NEXT_PUBLIC_DEFAULT_CHAIN}
				chains={chains}
			>
				<MainLayout>
					<Component {...pageProps} />
				</MainLayout>
			</RainbowKitProvider>
		</WagmiConfig>
	);
}

// Exportation de la fonction MyApp par défaut
export default MyApp;
