module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    zenchain: {
      host: "zenchain-testnet.example.com", // Replace with actual Zenchain testnet host
      port: 8545, // Replace with actual port if different
      network_id: "your_network_id", // Replace with actual network ID
      gas: 5000000,
      gasPrice: 20000000000 // Adjust gas price as needed
    }
  },
  compilers: {
    solc: {
      version: "0.8.0", // Specify the Solidity compiler version
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
};