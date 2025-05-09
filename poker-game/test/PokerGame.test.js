const PokerGame = artifacts.require("PokerGame");

contract("PokerGame", (accounts) => {
    let pokerGame;

    beforeEach(async () => {
        pokerGame = await PokerGame.new();
    });

    it("should allow a player to join the game", async () => {
        await pokerGame.joinGame({ from: accounts[0] });
        const playerCount = await pokerGame.getPlayerCount();
        assert.equal(playerCount.toNumber(), 1, "Player count should be 1 after joining");
    });

    it("should not allow a player to join the game twice", async () => {
        await pokerGame.joinGame({ from: accounts[0] });
        try {
            await pokerGame.joinGame({ from: accounts[0] });
            assert.fail("Expected error not received");
        } catch (error) {
            assert(error.message.includes("Player already in game"), "Expected error not received");
        }
    });

    it("should allow players to place bets", async () => {
        await pokerGame.joinGame({ from: accounts[0] });
        await pokerGame.placeBet(100, { from: accounts[0] });
        const playerBet = await pokerGame.getPlayerBet(accounts[0]);
        assert.equal(playerBet.toNumber(), 100, "Player bet should be 100");
    });

    it("should not allow placing a bet without joining the game", async () => {
        try {
            await pokerGame.placeBet(100, { from: accounts[1] });
            assert.fail("Expected error not received");
        } catch (error) {
            assert(error.message.includes("Player not in game"), "Expected error not received");
        }
    });

    it("should allow the game to be started", async () => {
        await pokerGame.joinGame({ from: accounts[0] });
        await pokerGame.joinGame({ from: accounts[1] });
        await pokerGame.startGame();
        const gameStarted = await pokerGame.isGameStarted();
        assert.equal(gameStarted, true, "Game should be started");
    });
});