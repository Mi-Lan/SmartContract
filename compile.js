
////////////////////////////////////////////
const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');



const inboxPath=path.resolve(__dirname,'contracts','Authorship.sol');
const source=fs.readFileSync(inboxPath,'utf8');

var input = {
    language: 'Solidity',
    sources: {
        'Authorship.sol': {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
}
const output = JSON.parse(solc.compile(JSON.stringify(input)));

console.log(output.contracts['Authorship.sol'].Author.evm.bytecode)
console.log(output.contracts['Authorship.sol'].Author.abi)

module.exports=output.contracts['Authorship.sol'].Author;

