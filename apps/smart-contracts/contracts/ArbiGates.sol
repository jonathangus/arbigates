// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

contract ArbiGates {
    uint256 count = 0;
    mapping(uint256 => bytes) public conditions;

    event Created(uint256 gateId, address creator);

    function add(bytes calldata _conditions) public {
        conditions[count] = _conditions;
        emit Created(count, msg.sender);
        count++;
    }
}
