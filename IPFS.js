// Importation des bibliothèques IPFS et IPFS-HTTP-Client
const IPFS = require('ipfs-core');
const infura = require('ipfs-http-client');

// Création d'une instance IPFS
const ipfs = await IPFS.create();

// Ajout du fichier à IPFS et récupération de son URL
const filesAdded = await ipfs.add({path: 'nom_du_fichier', content: contenu_du_fichier});
const ipfsUrl = `https://ipfs.infura.io/ipfs/${filesAdded.cid.toString()}`;

// Affichage de l'URL IPFS dans la console
console.log(`IPFS URL: ${ipfsUrl}`);
