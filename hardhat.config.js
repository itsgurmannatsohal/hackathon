require("@nomicfoundation/hardhat-toolbox");

const { HardhatUserConfig } = require ("hardhat/config");
const {dotenv} =require ("dotenv");
require('dotenv').config();

module.exports = {
  
  solidity: "0.8.17",
  defaultNetwork: "polygon_mumbai",
  networks: {
    polygon_mumbai: {
      url: `${process.env.API_URL}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    
  },
  
};

