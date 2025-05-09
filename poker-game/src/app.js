const Web3 = require('web3');
const PokerGameContract = require('./contracts/PokerGame.json');

const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
let pokerGame;

async function init() {
    const accounts = await web3.eth.getAccounts();
    pokerGame = new web3.eth.Contract(PokerGameContract.abi, PokerGameContract.networks[5777].address);

    // Add event listeners and other initialization logic here
}

async function startGame() {
    const accounts = await web3.eth.getAccounts();
    await pokerGame.methods.startGame().send({ from: accounts[0] });
}

async function joinGame() {
    const accounts = await web3.eth.getAccounts();
    await pokerGame.methods.joinGame().send({ from: accounts[0] });
}

// Add more functions to handle game actions

window.onload = init;