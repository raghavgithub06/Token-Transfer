const TokenTransfer = artifacts.require("TokenTransfer");

module.exports = function(deployer) {
  deployer.deploy(TokenTransfer);
};
