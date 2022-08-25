require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: "0.8.4",

  networks: {
    "goerli": {
       url: "https://opt-goerli.g.alchemy.com/v2/CuYiTcQVeAIgpg9-81Y-WExr-o5ofKUc",
       accounts: ["0d548fde64152fe110650c96cc9565c415f3523653ec632c8c83efab016a9c59"]
    }
  }

};
