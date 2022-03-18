// capital cuz that is a class
import Web3 from "web3";
 
window.ethereum.request({ method: "eth_requestAccounts" });

// connecting to the provider used by metamask
// and we connect it to our own app
const web3 = new Web3(window.ethereum);
 
export default web3;

// 100% setup web3 that we can use now
// remember to change the package.json see lecture 104
// so meta mask is gonna get updated but we want to use our own version
// so that is how we actually do it
