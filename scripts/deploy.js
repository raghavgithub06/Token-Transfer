const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const TokenTransfer = await ethers.getContractFactory("TokenTransfer");
  const tokenTransfer = await TokenTransfer.deploy();

  await tokenTransfer.deployed();

  console.log("TokenTransfer deployed to:", tokenTransfer.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });