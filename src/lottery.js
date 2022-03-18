// create this after you deplotyed the contract using infura rinkeby 
import web3 from './web3';

const address = '0xe41DaAd10A6171103846d009c434F5247fe25a23';
const abi = [{"constant":true,"inputs":[],"name":"manager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pickWinner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getPlayers","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"enter","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"players","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];

// So this thing right here, this thing that we just created and exported is essentially our our window
// or our portal, our access to our contract that actually exists on the block chain.
// This line of code right here, specifically the Web 3.0 contract should look pretty familiar.
// You will recall that we wrote the same line of code when we were just working on our test project where
// all the testing code a little bit ago.
export default new web3.eth.Contract(abi, address);

//All right, so now this lottery has file exports, a complete copy of our contract that we can work
//with from the Riak side of our code base

// tests tell you how to interact with web3 in this case
