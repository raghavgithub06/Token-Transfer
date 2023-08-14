require("@nomiclabs/hardhat-ethers");

module.exports = {
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/X-WMpowVHuNpg-kZUQszbVd76HRpzZ9T",
      accounts: [`0x1b0e72aa33c9b205609c8a7910ce9c7d6a580ef9d81599b83388d6181c2f2768`], 
    },
  },
  solidity: "0.8.0",
};