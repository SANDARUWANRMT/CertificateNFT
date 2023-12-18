const key = process.env.REACT_APP_PINATA_KEY;
const secret = process.env.REACT_APP_PINATA_SECRET;

const axios = require('axios');
const FormData = require('form-data');


const { ethers } = require("ethers");
const certificateNFTArtifact = require("./artifacts.json");

// Function to interact with  smart contract to mint an NFT
const mintNFT = async (metadataUri) => {
    const { wallet, CertificateNFTContract } = await interactWithContract(); 
    

    try {
        const tokenId = 1; 
        // Calling smartcontract for minting function
        const mintTransaction = await CertificateNFTContract.safeMint(wallet.address, tokenId, metadataUri);
        const receipt = await mintTransaction.wait();
        const mintedEvent = receipt.events.find(event => event.event === "Transfer");
        const mintedTokenId = mintedEvent.args.tokenId.toNumber();
        return mintedTokenId;
    } catch (error) {
        console.error("Error minting NFT:", error.message);
        return null;
    }
};

// Function to upload JSON to IPFS and mint the certificate as NFT
export const uploadJSONAndMintNFT = async (JSONBody) => {
    const pinataResponse = await uploadJSONToIPFS(JSONBody);
    if (pinataResponse.success) {
        const tokenId = await mintNFT(pinataResponse.pinataURL);
        return {
            success: tokenId !== null,
            tokenId: tokenId,
            pinataURL: pinataResponse.pinataURL
        };
    } else {
        return {
            success: false,
            message: "Failed to upload JSON to IPFS"
        };
    }
};

// Function to upload file to IPFS and mint Certificate
export const uploadFileAndMintNFT = async (file) => {
    const pinataResponse = await uploadFileToIPFS(file);
    if (pinataResponse.success) {
        const tokenId = await mintNFT(pinataResponse.pinataURL);
        return {
            success: tokenId !== null,
            tokenId: tokenId,
            pinataURL: pinataResponse.pinataURL
        };
    } else {
        return {
            success: false,
            message: "Failed to upload file to IPFS"
        };
    }
};

