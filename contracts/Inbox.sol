pragma solidity ^0.4.17;

contract Inbox {
    string public message;

    function Inbox(string firstMessage) public {
        message=firstMessage;
    }

    function setMessage(string newMessage) public {
        message=newMessage;
    }
}