const TokenTransfer = artifacts.require("TokenTransfer");
const MockERC20 = artifacts.require("IERC20"); // You should replace this with the actual ERC20 token contract

contract("TokenTransfer", (accounts) => {
  const owner = accounts[0];
  const recipient = accounts[1];

  it("should transfer tokens", async () => {
    const tokenInstance = await MockERC20.new(); // Deploy a MockERC20 token contract for testing
    const contractInstance = await TokenTransfer.new();

    // Mint tokens for the owner
    await tokenInstance.mint(owner, web3.utils.toWei("1000", "ether"));

    const amount = web3.utils.toWei("100", "ether"); // Amount in wei

    // Transfer tokens to the TokenTransfer contract
    await tokenInstance.transfer(contractInstance.address, amount, { from: owner });

    // Call the transferToken function
    await contractInstance.transferToken(tokenInstance.address, recipient, amount, { from: owner });

    // Check the recipient's token balance
    const recipientBalance = await tokenInstance.balanceOf(recipient);
    assert.equal(recipientBalance.toString(), amount, "Recipient did not receive the tokens");
  });

  it("should transfer Ether", async () => {
    const contractInstance = await TokenTransfer.new();

    const ethAmount = web3.utils.toWei("0.1", "ether");

    // Call the transferEth function
    await contractInstance.transferEth(recipient, { from: owner, value: ethAmount });

    // Check the recipient's Ether balance
    const recipientBalance = await web3.eth.getBalance(recipient);
    assert.equal(recipientBalance.toString(), ethAmount, "Recipient did not receive the Ether");
  });
});