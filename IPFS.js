const IPFS = require('ipfs-core');
const infura = require('ipfs-http-client');

const ipfs = await IPFS.create();

const filesAdded = await ipfs.add({path: 'nom_du_fichier', content: contenu_du_fichier});
const ipfsUrl = `https://ipfs.infura.io/ipfs/${filesAdded.cid.toString()}`;

console.log(`IPFS URL: ${ipfsUrl}`);

