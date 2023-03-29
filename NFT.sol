pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract IPFSNFT is ERC721 {
    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {}

    function mintWithCID(string memory _cid) public {
        uint256 tokenId = uint256(keccak256(abi.encodePacked(msg.sender, _cid))); // Calcul de l'identifiant du token en utilisant l'adresse de l'utilisateur et le CID
        _mint(msg.sender, tokenId); // Création du NFT avec l'identifiant calculé et transfert à l'utilisateur
    }
}