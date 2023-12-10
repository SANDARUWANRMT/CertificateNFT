// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import necessary contracts from OpenZeppelin
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// Define the NFT contract
contract CertificateNFT is ERC721URIStorage, Ownable {
    // Mapping to store UID (unique identifier) for each NFT token ID
    mapping(uint256 => string) private uidMappings;

    // Constructor to initialize the contract with a name and symbol
    constructor() ERC721("CertificateNFT", "CNFT") {}

    // Mint NFT function that can only be called by the contract owner
    function mintNFT(address _to, uint256 _tokenId, string memory _tokenURI, string memory _uid) public onlyOwner {
        // Mint the NFT and set its token URI
        _mint(_to, _tokenId);
        _setTokenURI(_tokenId, _tokenURI);
        
        // Store the UID for the NFT token ID
        uidMappings[_tokenId] = _uid;
    }

    // Transfer NFT function
    function transferNFT(address _to, uint256 _tokenId) public {
        // Check if the caller is the owner or approved to transfer the NFT
        require(_isApprovedOrOwner(msg.sender, _tokenId), "Not approved or owner");
        
        // Transfer the NFT to the new address
        _transfer(msg.sender, _to, _tokenId);
    }

    // Save UID function
    function saveUID(uint256 _tokenId, string memory _uid) public {
        // Check if the caller is the owner or approved to modify the UID
        require(_isApprovedOrOwner(msg.sender, _tokenId), "Not approved or owner");
        
        // Store the new UID for the NFT token ID
        uidMappings[_tokenId] = _uid;
    }

    // Get UID function
    function getUID(uint256 _tokenId) public view returns (string memory) {
        // Retrieve and return the stored UID for the given token ID
        return uidMappings[_tokenId];
    }

    // Update UID function
    function updateUID(uint256 _tokenId, string memory _newUID) public {
        // Check if the caller is the owner or approved to modify the UID
        require(_isApprovedOrOwner(msg.sender, _tokenId), "Not approved or owner");
        
        // Update the stored UID for the NFT token ID
        uidMappings[_tokenId] = _newUID;
    }
}
