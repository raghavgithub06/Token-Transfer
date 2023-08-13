const HDWalletProvider = require('@truffle/hdwallet-provider');

const alchemyApiKey = 'GmrKvlW0nBJiWlV_NXXJQHszMd1M9cqU';
const privateKey = '1b0e72aa33c9b205609c8a7910ce9c7d6a580ef9d81599b83388d6181c2f2768';

module.exports = {
  networks: {
    sepolia: {
      provider: () => new HDWalletProvider(privateKey, `wss://eth-sepolia.alchemyapi.io/v2/${alchemyApiKey}`),
      network_id: 5555, // Sepolia Testnet ID
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },
  compilers: {
    solc: {
      version: "0.8.0", // or any other version you're using
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};