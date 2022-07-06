const hre = require("hardhat");

async function main() {

  const DaoMint = await hre.ethers.getContractFactory("DaoMint");
  const daoMint = await DaoMint.deploy();

  await daoMint.deployed();

  console.log("DaoMint deployed to:", daoMint.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
