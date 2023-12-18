const { ethers } = require('ethers');
const { interactWithContract, uploadJSONToIPFS, uploadFileToIPFS } = require('./Pinata'); // Adjust the path accordingly

const mintNFT = async (metadataUri) => {
  const { wallet, CertificateNFTContract } = await interactWithContract();

  try {
    const tokenId = 1; // Set the desired tokenId
    const mintTransaction = await CertificateNFTContract.safeMint(wallet.address, tokenId, metadataUri);
    const receipt = await mintTransaction.wait();
    const mintedEvent = receipt.events.find((event) => event.event === 'Transfer');
    const mintedTokenId = mintedEvent.args.tokenId.toNumber();
    return mintedTokenId;
  } catch (error) {
    console.error('Error minting NFT:', error.message);
    return null;
  }
};

const mintFromJSON = async (JSONBody) => {
  const pinataResponse = await uploadJSONToIPFS(JSONBody);

  if (pinataResponse.success) {
    const tokenId = await mintNFT(pinataResponse.pinataURL);
    return {
      success: tokenId !== null,
      tokenId: tokenId,
      pinataURL: pinataResponse.pinataURL,
    };
  } else {
    return {
      success: false,
      message: 'Failed to upload JSON to IPFS',
    };
  }
};

const mintFromFile = async (file) => {
  const pinataResponse = await uploadFileToIPFS(file);

  if (pinataResponse.success) {
    const tokenId = await mintNFT(pinataResponse.pinataURL);
    return {
      success: tokenId !== null,
      tokenId: tokenId,
      pinataURL: pinataResponse.pinataURL,
    };
  } else {
    return {
      success: false,
      message: 'Failed to upload file to IPFS',
    };
  }
};

