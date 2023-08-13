# Token-Transfer

## Overview

The `TokenTransfer` smart contract allows users to transfer tokens and Ether (ETH) between addresses. It provides two main functions: `transferToken` for transferring ERC20 tokens and `transferEth` for transferring Ether. The contract assumes the ERC20 token standard for token transfers.

## Contract Details

- **Solidity Version**: 0.8.0
- **License**: MIT

## Functions

### `transferToken`

```solidity
function transferToken(address tokenAddress, address recipient, uint256 amount) external
This function transfers ERC20 tokens from the sender's address to a specified recipient.

tokenAddress: The address of the ERC20 token contract.
recipient: The address to which the tokens will be transferred.
amount: The amount of tokens to transfer.
Note: This function relies on the IERC20 interface to interact with the ERC20 token contract.

transferEth
solidity
Copy code
function transferEth(address payable recipient) external payable
This function transfers Ether (ETH) from the sender's address to a specified recipient.

recipient: The address to which the Ether will be transferred.
Interfaces
IERC20
This interface defines the standard ERC20 token functions required for token transfers.

solidity
Copy code
interface IERC20 {
    function transfer(address to, uint256 value) external returns (bool);
}
transfer: Transfers a specified amount of tokens to a given address.
Usage Considerations
The transferToken function can be used to transfer ERC20 tokens from the contract deployer's address to other addresses.
Ensure that the contract has sufficient token allowance from the sender to perform the token transfer.
The transferEth function can be used to send Ether (ETH) from the contract to other addresses.
Example
Here's an example of how to use the TokenTransfer contract:

solidity
Copy code
// Assuming 'TokenTransfer' contract instance is deployed
TokenTransfer tokenTransfer = TokenTransfer(addressOfTokenTransferContract);

// Transfer ERC20 tokens
address tokenAddress = addressOfERC20TokenContract;
address recipient = addressOfRecipient;
uint256 amount = 1000; // Example: Transfer 1000 tokens
tokenTransfer.transferToken(tokenAddress, recipient, amount);

// Transfer Ether
address payable ethRecipient = payable(addressOfEthRecipient);
uint256 ethAmount = 1 ether; // Example: Transfer 1 ETH
tokenTransfer.transferEth{value: ethAmount}(ethRecipient);
Remember to replace addressOfTokenTransferContract, addressOfERC20TokenContract, addressOfRecipient, and addressOfEthRecipient with the appropriate addresses.

vbnet
Copy code

Feel free to adjust and expand this documentation as needed based on your project's requirements and preferences.





