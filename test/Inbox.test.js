const assert=require('assert');
const ganache=require('ganache-cli');
const Web3=require('web3');
//this is instance of Web3 which communicates with ganache local network provider!
const web3=new Web3(ganache.provider());

class Car{
    park(){
        return 'stopped';
    }

    drive(){
        return 'vroom';
    }

}

describe('CarGo',()=>{
    it('can park',()=>{
        const car=new Car();
        assert.equal(car.park(),"stopped");
    });
    it('can drive',()=>{
        const car=new Car();
        assert.equal(car.drive(),'vroom');
    })
})

