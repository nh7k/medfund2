const hre = require("hardhat");

async function main() {
    const Donation = await hre.ethers.getContractFactory("Donation");
    const donation = await Donation.deploy(); // Deploy the contract

    await donation.waitForDeployment(); // Correct way to wait for deployment  npx hardhat run scripts/deploy.js --network localhost


    console.log(`Contract deployed to: ${donation.target}`); // Use `.target` instead of `.address`  Contract deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
