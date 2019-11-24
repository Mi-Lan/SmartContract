//only purpose of this file is to go into contracts folder
//and compile every contract that is inside of it

const path=require('path');
const fs=require('fs');
const solc=require('solc');

const inboxPath=path.resolve(__dirname,'contracts','Inbox.sol');
const source=fs.readFileSync(inboxPath,'utf8');

module.exports=solc.compile(source,1).contracts[':Inbox'];

