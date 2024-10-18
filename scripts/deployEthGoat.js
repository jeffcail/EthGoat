// import ethers
// create main function
// execute main function
const { ethers } = require("hardhat")

async function main() {
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

    // init 2 accounts
    const [owner, otherAccount] = await ethers.getSigners();

    // fund contract with ownver
    const fundTx = await ethGoat.fund({
        value: ethers.parseEther("0.00001")
    })
    await fundTx.wait()

    console.log(`two accounts are ${owner.address} and ${otherAccount}`);

    // get owner balance
    await getBalance(ethGoat.target);

    // found contract with other account
    const fundTxWithOtherAccount = await ethGoat.connect(otherAccount)
        .fund({
            value: ethers.parseEther("0.00001")
        })
    await fundTxWithOtherAccount.wait()

    // get owner balance
    await getBalance(ethGoat.target);

    // check mapping
    const ownerAccountBalanceInEthGoat = await ethGoat.fundersToAmount(owner.address);
    const otherAccountBalanceInEthGoat = await ethGoat.fundersToAmount(otherAccount.address);
    console.log(`owner account is ${owner.address} balance in ethGoat is ${ownerAccountBalanceInEthGoat}`);
    console.log(`other account is ${otherAccount.address} balance in ethGoat is ${otherAccountBalanceInEthGoat}`);

    // get transactionCount
    await getTransactionCount(ethGoat.target);

    // get code
    await getCode(ethGoat.target);

}

async function verifyEthGoat(ethGoatAddr, args) {
    await hre.run("verify:verify", {
        address: ethGoatAddr,
        constructorArguments: [],
    });
}

async function getBalance(ethGoatAddr) {
    const balance = await ethers.provider.getBalance(ethGoatAddr);
    console.log('balance is' + balance.toString());
}

async function getTransactionCount(ethGoatAddr) {
    const transactionCount = await ethers.provider.getTransactionCount(ethGoatAddr);
    console.log("transaction count is " + transactionCount);

}

async function getCode(ethGoatAddr) {
    const code = await ethers.provider.getCode(ethGoatAddr);
    console.log("code is " + code);

}

main().then().catch((error) => {
    console.error(error);
    process.exit(1);
})
