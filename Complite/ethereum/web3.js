import Web3 from 'web3';

let web3;

if(typeof window !== 'undefined' && window.web3 !== 'undefined') {
    //We are in the browser AND metamask is running
    async () => {await window.ethereum.enable();}
    web3 = new Web3(window.ethereum);
} else {
    //We are on the server OR the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://goerli.infura.io/v3/0e6166dc3b424336a55d777a56bfc368'
    );
    web3 = new Web3(provider);
}

export default web3;