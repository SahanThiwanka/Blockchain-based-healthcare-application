const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledRecord = require('../build/contracts/Record.json');

// const contractABI = require('../ABI & Bytecode/contractABI');
// const contractbytecode = require('../ABI & Bytecode/contractbytecode');

//Link to rinkeby network by using Infura and providing seed phrase of metamask wallet
const provider = new HDWalletProvider(
    'sick order exile fix resemble winter average sail great middle want effort',
    'HTTP://127.0.0.1:7545',

    // 'jacket give extra material motion elder shock again scene nose urge slush',
    // 'https://goerli.infura.io/v3/0e6166dc3b424336a55d777a56bfc368',
);

const web3 = new Web3(provider);

const deploy = async () => {
  try {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);

    //Deploy contract to rinkeby network
    const contract = await new web3.eth.Contract(compiledRecord.abi)
      .deploy({ data: compiledRecord.bytecode })
      .send({ gas: '6721975', from: accounts[0] });

    //Display the address of the contract
    console.log('Contract deployed to', contract.options.address);
  } catch (error) {
    console.error('Error deploying contract:', error.message);
  }
  //Always go to record.js after updating solidity code
}

deploy();