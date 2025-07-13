import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-ignition";
import "dotenv/config";

// Safely read the PRIVATE_KEY from .env
const privateKey = process.env.PRIVATE_KEY;

if (!privateKey) {
  throw new Error("❌ PRIVATE_KEY is not set in your .env file.");
}

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    filecoinTestnet: {
      url: "https://api.calibration.node.glif.io/rpc/v1",
      accounts: [privateKey],
      chainId: 314159,
    },
  },
};

export default config;
