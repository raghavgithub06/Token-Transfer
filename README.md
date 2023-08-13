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





