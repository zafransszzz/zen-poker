# Poker Game on Zenchain Testnet

## Overview
This project is a decentralized poker game built on the Zenchain testnet. It utilizes smart contracts to manage game logic, player interactions, and state management, providing a secure and transparent gaming experience.

## Project Structure
```
poker-game
├── contracts
│   ├── PokerGame.sol         # Smart contract for the poker game
│   └── migrations
│       └── deploy.js         # Deployment script for the smart contract
├── src
│   ├── index.html            # Main HTML file for the application
│   ├── app.js                # Client-side JavaScript code
│   └── styles
│       └── style.css         # CSS styles for the application
├── test
│   └── PokerGame.test.js     # Test cases for the smart contract
├── package.json               # npm configuration file
├── truffle-config.js         # Truffle configuration file
└── README.md                 # Project documentation
```

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd poker-game
   ```

2. **Install Dependencies**
   Ensure you have Node.js and npm installed. Then run:
   ```bash
   npm install
   ```

3. **Configure Truffle**
   Update the `truffle-config.js` file with your Zenchain testnet settings.

4. **Deploy the Smart Contract**
   Use Truffle to deploy the PokerGame contract:
   ```bash
   truffle migrate --network <your-network>
   ```

5. **Run the Application**
   Open `src/index.html` in your web browser to start playing the poker game.

## Usage
- Players can join the game, place bets, and interact with the poker game through the web interface.
- The game logic is handled by the smart contract, ensuring fairness and transparency.

## Testing
Run the tests for the PokerGame smart contract using:
```bash
truffle test
```

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.