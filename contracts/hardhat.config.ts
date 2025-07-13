import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-ignition";
import "dotenv/config";

// Safely read environment variables
const privateKey = process.env.PRIVATE_KEY;
const sepoliaRpcUrl = process.env.SEPOLIA_RPC_URL;

if (!privateKey) {
  throw new Error("❌ PRIVATE_KEY is not set in your .env file.");
}

if (!sepoliaRpcUrl) {
  throw new Error("❌ SEPOLIA_RPC_URL is not set in your .env file.");
}

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    filecoinTestnet: {
      url: "https://api.calibration.node.glif.io/rpc/v1",
      accounts: [privateKey],
      chainId: 314159,
    },
    sepolia: {
      url: sepoliaRpcUrl,
      accounts: [privateKey],
      chainId: 11155111,
    },
  },
};

export default config;
