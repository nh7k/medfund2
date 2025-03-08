import { ethers } from "ethers";
import DonationABI from "./abis/Donation.json"; // Ensure this file exists!

const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Replace with the actual deployed contract address
 
// ✅ Connect Wallet & Check MetaMask
export const connectWallet = async () => {
    if (!window.ethereum) {
        alert("Please install MetaMask!");
        return null;
    }
    try {
        const provider = new ethers.BrowserProvider(window.ethereum); // Updated for ethers v6
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        console.log("Connected Wallet Address:", address);
        return address;
    } catch (error) {
        console.error("❌ Error connecting wallet:", error);
        return null;
    }
};

// ✅ Get Ethereum Contract Instance (Fix ENS Issue)
export const getEthereumContract = async () => {
    if (!window.ethereum) {
        console.error("No Ethereum provider found. Install MetaMask.");
        return null;
    }
    const provider = new ethers.BrowserProvider(window.ethereum); // Updated for ethers v6
    const signer = await provider.getSigner();

    // ❌ Fix the ENS error: Explicitly pass contract address string instead of resolving it
    return new ethers.Contract(CONTRACT_ADDRESS.toLowerCase(), DonationABI.abi, signer);
};

// ✅ Function to Make a Donation
export const donate = async (amount) => {
    try {
        const contract = await getEthereumContract();
        if (!contract) return;
        const tx = await contract.donate({ value: ethers.parseEther(amount) }); // Updated for ethers v6
        await tx.wait();
        console.log("✅ Donation successful!");
    } catch (error) {
        console.error("❌ Donation failed:", error);
    }
};

// ✅ Function to Fetch Total Donations
export const getTotalDonations = async () => {
    try {
        const contract = await getEthereumContract();
        if (!contract) return "0";
        const totalDonations = await contract.totalDonations();
        return totalDonations.toString();
    } catch (error) {
        console.error("❌ Error fetching total donations:", error);
        return "0";
    }
};