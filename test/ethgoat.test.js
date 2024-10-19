const { ethers } = require("hardhat");
const { assert } = require("chai");

describe("test ethgoat contract", async function () {
    it("test if the owner is msg.sender", async function () {
        const [ownerAccount] = await ethers.getSigners();
        const ethgoatFactory = await ethers.getContractFactory("EthGoat");
        const ethgoat = await ethgoatFactory.deploy();
        await ethgoat.waitForDeployment();
        assert.equal((await ethgoat.owner()), ownerAccount.address);
    })
});