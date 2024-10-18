require("@nomicfoundation/hardhat-toolbox");
require("@chainlink/env-enc").config();
require("./tasks/deploy_ethgoat");
require("./tasks/interact_ethgoat");

const SEPOLIA_URL = process.env.SEPOLIA_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETH_API_KEY = process.env.ETH_API_KEY;
const PRIVATE_KEY_OTHER = process.env.PRIVATE_KEY_OTHER;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [PRIVATE_KEY, PRIVATE_KEY_OTHER],
      chainId: 11155111
    }
  },
  etherscan: {
    apiKey: ETH_API_KEY
  }
};
