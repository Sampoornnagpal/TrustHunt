# 🔒 TrustHunt

**TrustHunt** is a decentralized bug bounty platform built on the **Polygon blockchain**, designed to bring transparency, trust, and community-driven security to the Web3 ecosystem.

Developers and security researchers can report vulnerabilities in a tamper-proof, on-chain manner — and project maintainers can incentivize and reward ethical disclosures with confidence.

---

## ⚡ Why TrustHunt?

- 🛡️ **Trust-Focused:** Immutable proof of submissions builds trust between developers and security researchers.
- 🧠 **Open Contribution Model:** Anyone can report bugs — no centralized gatekeeping.
- ⛓️ **Built on Polygon:** Fast, affordable, and environmentally conscious blockchain infrastructure.
- 📜 **Transparent Audit Trail:** Every submission is stored on-chain for verification.

---

## 🧱 Tech Stack

- **Smart Contracts:** Solidity + Hardhat
- **Blockchain:** Polygon (Mumbai / Mainnet ready)
- **Frontend:** Next.js + Tailwind CSS
- **Wallet Integration:** Ethers.js + MetaMask

---

## 🧪 Features

- ✅ On-chain bug report submissions
- ✅ Viewable bug history with verification status
- 🔜 Admin verification and bounty rewards (next milestone)
- 🔜 DAO-based approval and dispute resolution (future upgrade)

---

## 📁 Project Structure

TrustHunt/
├── contracts/ # Solidity smart contracts
├── scripts/ # Hardhat deployment scripts
├── frontend/
│ ├── components/ # React UI components
│ ├── utils/ # Blockchain interaction (Ethers.js)
│ └── contracts/ # ABI + deployed contract address
└── README.md

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/Sampoornnagpal/TrustHunt.git
cd TrustHunt
```
### 2. Install dependencies & compile contracts
npm install
npx hardhat compile

### 3. Deploy contract locally
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost

### 4. Start the frontend
cd frontend
npm install
npm run dev
Make sure MetaMask is connected to your local Hardhat

---
##🎯 Live Demo
Coming soon: trusthunt.xyz
For now, clone & run locally to explore.
---
##📬 Contact
Sampoorn Nagpal
📧 nagpalsampoorn@gmail.com
🔗 github.com/Sampoornnagpal
---
##🤝 Support & Grants
TrustHunt is being submitted for:
💜 Gitcoin Grants – Round focused on security and open infrastructure
🔷 Polygon Community Grants – Building decentralized trust on Polygon
Your support helps us secure the Web3 ecosystem — one bug at a time.
---
##📝 License
MIT License. Feel free to fork, contribute, and build on top of TrustHunt.
---
