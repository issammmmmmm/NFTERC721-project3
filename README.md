# 🎨 Project 3 – DevNFT (ERC-721 NFT Minting)

A simple fullstack project demonstrating the creation, minting, and display of an NFT on the **Sepolia testnet**.  
The app allows a user to connect with MetaMask and view metadata (image, name, description) of a minted NFT.

---

## 🔗 Contract Information

- **Contract Name**: DevNFT
- **Contract Address**: `0x90eD84A063491e5890C3F0E2C3432EF660e865C4`
- **Network**: Sepolia Testnet
- **Etherscan Tx**: [View transaction](https://sepolia.etherscan.io/tx/0x36e0f06d92c4b28996050d9b5203f49e4eec624c82da7222a777e87515c0b427)
- **Explorer**: [View contract on Sepolia](https://sepolia.etherscan.io/address/0x90eD84A063491e5890C3F0E2C3432EF660e865C4)

---

## 🚀 Features

- Connect MetaMask
- Mint NFT via Remix with a JSON tokenURI hosted on IPFS
- Load NFT metadata and display:
  - ✅ Name
  - ✅ Description
  - ✅ Image (from IPFS)

---

## 🧪 Tech Stack

- **Solidity** (ERC-721 via OpenZeppelin)
- **Remix IDE**
- **React + Vite**
- **Ethers.js**
- **Pinata / IPFS**
- **MetaMask**

---

## 📁 Project Structure

- `DevNFTcontract.sol` → Solidity contract used for deployment
- `React-Interface.jsx` → React frontend (Vite + Ethers.js)
- `devnft.js` → ABI file
- `tokenURI.json` → Metadata JSON used to mint NFT:
```json
{
  "name": "DevNFT #1",
  "description": "A unique NFT minted during a Web3 developer sprint",
  "image": "https://ipfs.io/ipfs/QmYourImageHash"
}
