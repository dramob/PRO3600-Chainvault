const hre = require("hardhat");

async function main() {
  // Obtention de l'usine de contrat NFT
  const Contract = await hre.ethers.getContractFactory("Nft");
  // Déploiement du contrat
  const contract = await Contract.deploy();
  // Attendre que le contrat soit déployé
  await contract.deployed();

  console.log("Nft deployed to:", contract.address);
}

// Appel de la fonction principale et gestion des erreurs
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
