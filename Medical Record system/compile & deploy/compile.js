const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
console.log('Deleting build folder...');
fs.removeSync(buildPath);

console.log('Getting contract by path...');
const campaignPath = path.resolve(__dirname, 'contracts', 'Record.sol');
const source = fs.readFileSync(campaignPath, 'utf8');

console.log('Compiling contract...');
const input = {
  language: 'Solidity',
  sources: {
    'Record.sol': {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['abi','evm.bytecode'],
      },
    },
    optimizer: {
      enabled: true,
      runs: 200,
    },
    viaIR: true,
  },
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));

if (output.errors) {
  console.error(output.errors);
  process.exit(1);
}

fs.ensureDirSync(buildPath); //recreate build folder

for (let contractName in output.contracts['Record.sol']) {
    const contract = output.contracts['Record.sol'][contractName];
    fs.outputJsonSync(
        path.resolve(buildPath, contractName.replace(':', '') + '.json'),
        contract
    );
    console.log('Compiling contract done');
}
