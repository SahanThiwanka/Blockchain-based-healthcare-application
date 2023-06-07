import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && window.ethereum) {
  // We are in the browser and metamask is available
  window.ethereum.enable();
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server or the user doesn't have metamask
  const provider = new Web3.providers.HttpProvider(
    'HTTP://127.0.0.1:7545'
  );
  web3 = new Web3(provider);
}

export default web3;
