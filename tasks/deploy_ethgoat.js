const { task } = require("hardhat/config");

task("deploy_ethgoat").setAction(async (taskArgs, hre) => {
    // create factory
    const ethGoatFactory = await ethers.getContractFactory("EthGoat");
    console.log("contract is being depoying...");

    // deploy contract from factory
    const ethGoat = await ethGoatFactory.deploy();
    await ethGoat.waitForDeployment();
    console.log("contract has been deployed successfully");
    console.log("contract address is " + ethGoat.target);

    if (hre.network.config.chainId == 11155111 && process.env.ETH_API_KEY) {
        console.log("waiting for five blocks to be mined...");
        await ethGoat.deploymentTransaction().wait(5);
        // verify contract
        await verifyEthGoat(ethGoat.target, []);
    } else {
        console.log("verification is not supported on this network");
    }
})

async function verifyEthGoat(ethGoatAddr, args) {
    await hre.run("verify:verify", {
        address: ethGoatAddr,
        constructorArguments: [],
    });
}

module.exports = {}