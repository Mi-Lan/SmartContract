//purpose of this folder is to deploy compiled code to the network 

//thorugh instance of this we are able to connect to infura node with wallet
const HDWalletProvider=require('truffle-hdwallet-provider');
const Web3=require('web3');
//compiled contract into bytecode and interface
const {evm,abi}=require('./compile');

const provider=new HDWalletProvider(
//mneumonic with infura rinkeby endopoint
'economy cheap survey survey unknown gesture orange carpet audit suspect rough announce',
'https://rinkeby.infura.io/v3/e8078e317212477ea40f124aa8949a9b'
);

const web3=new Web3(provider);


    

var contract = new web3.eth.Contract(abi,'0x67Dd5D5ECb12818407ec454Eb02E9feBFcC57cD7');

//var myContractInstance = contract.at('0x67Dd5D5ECb12818407ec454Eb02E9feBFcC57cD7');
/*contract.methods.claimAuthorship('Love-Generation',true,10).send({from: '0xE4d72684C7D3D9D0221F168A4C9F993Bb2B08288',gas: '200000',gasLimit:'20000000000'}).then((res)=>{
    console.log(res);
}).catch(function(err) {
    console.log(err);
});*/
contract.methods.getPrice('LoveGeneration').call({from: '0xE4d72684C7D3D9D0221F168A4C9F993Bb2B08288',gas: '200000',gasLimit:'20000000000'}).then((res)=>{
    console.log(res);
}).catch(function(err) {
    console.log(err);
});


console.log('passed!')

