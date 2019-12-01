const assert=require('assert');
const ganache=require('ganache-cli');
const Web3=require('web3');
const provider=ganache.provider()
//this is instance of Web3 which communicates with ganache local network provider!
const web3=new Web3(provider);
//we import abi and bytecode from compile.js where we store compiled contract
const {interface,bytecode}= require('../compile');


let accounts; 
let inbox;
const initialString="Hello!"

beforeEach(async ()=>{
    //catches all accounts that sweet ganache has provided us!
   accounts= await web3.eth.getAccounts();
    //deploying a contract with ganache account
   inbox=await  new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: [initialString] })
        .send({from:accounts[0],gas:'1000000'})
        inbox.setProvider(provider)
    
});

describe('Inbox',()=>{
    //we take option property from inbox(contract) and access address of deployed contract 
    //based on this we know that contract is deployed successfully
    //ok-checks if value provided in paranthesis is defines or not!
    it("deploy contract",()=>{
        assert.ok(inbox.options.address)
    })
    it('default message',async()=>{
        const message = await inbox.methods.message().call()
        assert.equal(message,initialString)
    })
    it("sets message",async()=>{
        await inbox.methods.setMessage("Works or not?").send({from:accounts[0]})
        const message=await inbox.methods.message().call()
        assert.equal('Works or not?',message)
    })
})



