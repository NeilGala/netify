const { ethers } = require("hardhat");

async function main() {
  const blockNumber = await ethers.provider.getBlockNumber();

  console.log("✅ Connected to Sepolia");
  console.log("Block Number:", blockNumber);
}

main().catch(console.error);