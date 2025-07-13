import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("DeployPPTToken", (m) => {
  const initialSupply = 1_000_000; // 1 million tokens
  const pptToken = m.contract("PPTToken", [initialSupply]);

  return { pptToken };
});
