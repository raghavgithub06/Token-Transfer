// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TokenTransfer {
    function transferToken(address tokenAddress, address recipient, uint256 amount) external {
        // Assuming ERC20 token standard
        IERC20 token = IERC20(tokenAddress);
        require(token.transfer(recipient, amount), "Token transfer failed");
    }

    function transferEth(address payable recipient) external payable {
        recipient.transfer(msg.value);
    }
}

interface IERC20 {
    function transfer(address to, uint256 value) external returns (bool);
}