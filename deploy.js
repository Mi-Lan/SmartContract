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

const deploy=async()=>{
    const accounts=await web3.eth.getAccounts()

    console.log("Deploying from acount",accounts[0])

    const result=await new web3.eth.Contract(JSON.parse(abi))
    .deploy({data:evm.bytecode})
    .send({gas:'1000000',from:accounts[0]})

    console.log('Contract deployed to',result.options.address)

}
deploy()