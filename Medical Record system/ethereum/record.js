import web3 from './web3';
import ABI from '../build/contracts/Record.json';

// const contractABI = require('../ABI & Bytecode/contractABI');

const contractAddress = "0x22FA945E972A609Ba1fFf7689b30A1f776B5B2Dd";

const contract = new web3.eth.Contract(ABI.abi,contractAddress);

export default contract;

//Whenever there is a change in Solidity code, use this few commands
//Step 1: cd ethereum
//Step 2: node compile.js
//Step 3: node deploy.js
//Step 4: Paste the contract deployed address above

// import web3 from './web3';
// import Record from './build/Record.json';

// const instance = new web3.eth.Contract(
//     JSON.parse(Record.interface),
//     '0xCb14a294b679E0A6931312bc513426217458570a' 
// );

// export default instance;
