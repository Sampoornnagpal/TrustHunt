import { ethers } from "ethers";
import BugBountyABI from "../contracts/BugBounty.json";
import contractAddress from "../contracts/contract-address.json";

export const getBugBountyContract = async () => {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  return new ethers.Contract(contractAddress.BugBounty, BugBountyABI.abi, signer);
};

