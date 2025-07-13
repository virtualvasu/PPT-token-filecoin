# PPT Token Subscription DApp on Filecoin & Sepolia

This project is a decentralized application (dApp) that demonstrates the deployment and utility of an ERC-20 token called **PPT (Park Pro Token)** across multiple EVM-compatible testnets.

The dApp mimics a document subscription system where users can:

* Save files
* Retrieve files
* Send files via email
* Print files

All interactions require holding or spending the **PPT token**, simulating a subscription/pay-per-use model.

---

## 🌍 Supported Networks

* [Filecoin Calibration Testnet](https://filscan.io)
* [Ethereum Sepolia Testnet](https://sepolia.etherscan.io)

---

## 📦 Contracts Deployed

### Filecoin Calibration

* **PPT Token:** [`0x857e1BA1Dfe726E33698cD21f38A02161d7958E3`](https://filscan.io/en/address/0x857e1BA1Dfe726E33698cD21f38A02161d7958E3/)
* **Invoice Contract:** [`0x34b6921bfe6c4933a1Af79b5f36A5b6e28B1a081`](https://filscan.io/en/address/0x34b6921bfe6c4933a1Af79b5f36A5b6e28B1a081/)

### Ethereum Sepolia

* **PPT Token:** [`0xAA8503c73fDA43f34992dc9E12e157A2D8137727`](https://sepolia.etherscan.io/address/0xAA8503c73fDA43f34992dc9E12e157A2D8137727)
* **Invoice Contract:** [`0x9CE706d43f19C40Ea6F8223a2B038E8A774a2292`](https://sepolia.etherscan.io/address/0x9CE706d43f19C40Ea6F8223a2B038E8A774a2292)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/PPT-token-filecoin.git
cd PPT-token-filecoin
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a `.env` File

Copy the template:

```bash
cp .env.template .env
```

Then add your private key and RPC URLs for Filecoin and Sepolia.

### 4. Compile Contracts

```bash
npx hardhat compile
```

### 5. Deploy to a Network

* Filecoin Calibration:

```bash
npx hardhat ignition deploy ignition/modules/DeployInvoiceContract.ts --network filecoinTestnet
```

* Sepolia:

```bash
npx hardhat ignition deploy ignition/modules/DeployInvoiceContract.ts --network sepolia
```

---

## 🧠 Features

* ✅ ERC-20 token with fixed supply (`PPTToken`)
* ✅ Token-gated file operations (`InvoiceContract`)
* ✅ Subscription feature using token transfers
* ✅ Multi-network deployment support

