const assert=require('assert');
const ganache=require('ganache-cli');
const Web3=require('web3');
//this is instance of Web3 which communicates with ganache local network provider!
const web3=new Web3(ganache.provider());
//we import abi and bytecode from compile.js where we store compiled contract
const {interface,bytecode}= require('../compile');


let accounts; 
let inbox;

beforeEach(async ()=>{
    //catches all accounts that sweet ganache has provided us!
   accounts= await web3.eth.getAccounts();
    //deploying a contract with ganache account
   inbox=await  new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there!'] })
        .send({from:accounts[0],gas:'1000000'})
    
});

describe('Inbox',()=>{
    it("deploy contract",()=>{
        console.log(inbox);
    })
})



