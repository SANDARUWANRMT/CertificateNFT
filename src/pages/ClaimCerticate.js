
import { useState } from 'react';
import "./ClaimCertificate.css";
import Navbar from './Navbar';

function Mint({ mintNFT }) {
 const [address, setAddress] = useState('');
 const [tokenId, setTokenId] = useState('');
 const [uri, setURI] = useState('');

 const handleMint = () => {
   
   alert("Congratulations! Your certificate is in the minting process. Please wait for confirmation within 24 hours.");
 };

 return (
    <div>
          <div className="body">
          <Navbar/>
     <div className='containernew'>
       <h2 className='h2new'>Claim CertificateNFT</h2>
       <label>
         Address:
         <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
       </label>
       <br />
       <label>
         First Name:
         <input type="text" value={tokenId} onChange={(e) => setTokenId(e.target.value)} />
       </label>
       <br />
       <label>
         Last Name:
         <input type="text" value={uri} onChange={(e) => setURI(e.target.value)} />
       </label>
       <br />
       <button onClick={handleMint} className='button'>Claim Your Certificate</button>
     </div>
   </div>
    </div>
   
 );
}

export default Mint;
