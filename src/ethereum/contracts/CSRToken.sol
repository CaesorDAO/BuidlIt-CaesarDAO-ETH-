// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// Example class - a mock class using delivering from ERC20
contract CSRToken is ERC20 {
    constructor(uint256 initialBalance) ERC20("CaesarToken", "CSR") {
        _mint(msg.sender, initialBalance);
    }
}

// 1000000000000000000  = 10**18