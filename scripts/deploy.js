const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const BugBounty = await hre.ethers.getContractFactory("BugBounty");
  const bugBounty = await BugBounty.deploy();
  await bugBounty.waitForDeployment();

  const address = await bugBounty.getAddress();
  console.log("Deployed to:", address);

  fs.writeFileSync(
    "./frontend/contracts/contract-address.json",
    JSON.stringify({ BugBounty: address }, null, 2)
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

