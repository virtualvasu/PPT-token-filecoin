import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("DeployInvoiceSystem", (m) => {
  const initialSupply = 1_000_000; // total supply for PPTToken

  // Step 1: Deploy PPTToken with initial supply
  const pptToken = m.contract("PPTToken", [initialSupply]);

  // Step 2: Deploy MedInvoiceContract with the PPTToken address
  const invoiceContract = m.contract("InvoiceContract", [pptToken]);

  return { pptToken, invoiceContract };
});
