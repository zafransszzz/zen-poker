// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PokerGame {
    enum GameState { WaitingForPlayers, InProgress, Finished }
    struct Player {
        address playerAddress;
        uint256 balance;
        bool isActive;
    }

    GameState public gameState;
    Player[] public players;
    uint256 public pot;

    event GameStarted();
    event PlayerJoined(address player);
    event PlayerFolded(address player);
    event GameFinished(address winner, uint256 amountWon);

    constructor() {
        gameState = GameState.WaitingForPlayers;
    }

    function joinGame() external payable {
        require(gameState == GameState.WaitingForPlayers, "Game is not accepting players");
        require(msg.value > 0, "Must send ETH to join");

        players.push(Player({
            playerAddress: msg.sender,
            balance: msg.value,
            isActive: true
        }));
        pot += msg.value;

        emit PlayerJoined(msg.sender);

        if (players.length >= 2) {
            startGame();
        }
    }

    function startGame() internal {
        gameState = GameState.InProgress;
        emit GameStarted();
    }

    function fold() external {
        require(gameState == GameState.InProgress, "Game is not in progress");
        for (uint256 i = 0; i < players.length; i++) {
            if (players[i].playerAddress == msg.sender) {
                players[i].isActive = false;
                emit PlayerFolded(msg.sender);
                break;
            }
        }
    }

    function finishGame(address winner) external {
        require(gameState == GameState.InProgress, "Game is not in progress");
        gameState = GameState.Finished;

        uint256 amountWon = pot;
        pot = 0;

        payable(winner).transfer(amountWon);
        emit GameFinished(winner, amountWon);
    }

    function getPlayers() external view returns (Player[] memory) {
        return players;
    }
}