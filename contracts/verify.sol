// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract verify {
    struct signedData {
        bytes32 dataHash;
        bytes sig;
        address addressOrg;
    }

    signedData[] data;

    mapping(address => signedData) addressToData;

    function uploadData(
        bytes32 dataHash,
        bytes memory sig,
        address addressOrg,
        address user
    ) public {
        signedData memory newData = signedData(dataHash, sig, addressOrg);
        data.push(newData);
        uint256 id = data.length - 1;
        addressToData[user] = data[id];
    }

    function splitSignature(bytes memory sig)
        public
        pure
        returns (
            uint8,
            bytes32,
            bytes32
        )
    {
        require(sig.length == 65);
        bytes32 r;
        bytes32 s;
        uint8 v;
        assembly {
            r := mload(add(sig, 32))
            s := mload(add(sig, 64))
            v := byte(0, mload(add(sig, 96)))
        }

        return (v, r, s);
    }

    function recoverSigner(bytes32 message, bytes memory sig)
        public
        pure
        returns (address)
    {
        uint8 v;
        bytes32 r;
        bytes32 s;
        (v, r, s) = splitSignature(sig);
        return ecrecover(message, v, r, s);
    }

    function checkVerification(
        address user,
        bytes32 message,
        bytes memory sig
    ) public view returns (bool) {
        return addressToData[user].addressOrg == recoverSigner(message, sig);
    }
}

