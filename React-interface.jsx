import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { contractABI } from "./abi/devnft";

const contractAddress = "0x39B6173A738526bcF8a801d0eE182e7d1a350dA5"; // 
const tokenId = 5; //  

function App() {
  const [wallet, setWallet] = useState(null);
  const [contract, setContract] = useState(null);
  const [nftData, setNftData] = useState(null);
  const [error, setError] = useState("");

  const connectWallet = async () => {
    try {
      const [address] = await window.ethereum.request({ method: "eth_requestAccounts" });
      setWallet(address);
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const nftContract = new ethers.Contract(contractAddress, contractABI, signer);
      setContract(nftContract);
      console.log("✅ Wallet connected:", address);
    } catch (err) {
      console.error("❌ Wallet connection failed:", err);
      setError("Wallet connection failed");
    }
  };

  const fetchNFT = async () => {
    if (!contract) return;
    try {
      const uri = await contract.tokenURI(tokenId);
      console.log("📦 tokenURI:", uri);

      const response = await fetch(uri);
      const metadata = await response.json();
      console.log("🎨 NFT Metadata:", metadata);
      setNftData(metadata);
    } catch (err) {
      console.error("❌ Failed to load metadata:", err);
      setError("Could not load NFT metadata");
    }
  };

  useEffect(() => {
    if (contract) {
      fetchNFT();
    }
  }, [contract]);

  return (
    <div className="App" style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>DevNFT Viewer</h1>

      {!wallet ? (
        <button onClick={connectWallet}>🔌 Connect Wallet</button>
      ) : (
        <>
          <p>Connected: {wallet}</p>
          {error && <p style={{ color: "red" }}>⚠️ {error}</p>}

          {nftData ? (
            <div style={{ marginTop: "2rem" }}>
              <img
                src={nftData.image}
                alt={nftData.name}
                style={{ width: "300px", borderRadius: "16px", boxShadow: "0 4px 12px #0003" }}
              />
              <h2>{nftData.name}</h2>
              <p>{nftData.description}</p>
            </div>
          ) : (
            <p>Loading NFT metadata...</p>
          )}
        </>
      )}
    </div>
  );
}

export default App;
