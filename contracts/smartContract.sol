// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";

contract CertificateNFT is ERC721, ERC721URIStorage, ERC721Pausable, Ownable, ERC721Burnable {
    constructor(address initialOwner)
        ERC721("CertificateNFT", "CNFT")
        Ownable(initialOwner)
    {}

    // Define the base URI for metadata
    function _baseURI() internal pure override returns (string memory) {
        return "https://scarlet-given-crane-294.mypinata.cloud/ipfs/";
    }

    // Pause contract functionality
    function pause() public onlyOwner {
        _pause();
    }

    // Unpause contract functionality
    function unpause() public onlyOwner {
        _unpause();
    }

    // Mint a new NFT with specified URI to the specified address
    function safeMint(address to, uint256 tokenId, string memory uri)
        public
        onlyOwner
    {
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.

    // Update function override for ERC721Pausable
    function _update(address to, uint256 tokenId, address auth)
        internal
        override(ERC721, ERC721Pausable)
        returns (address)
    {
        return super._update(to, tokenId, auth);
    }

    // Token URI function override for ERC721URIStorage
    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    // SupportsInterface function override for ERC721URIStorage
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
