const { assert, expect } = require("chai")
const { network, getNamedAccounts, deployments, ethers } = require("hardhat")
const { developmentChains, networkConfig } = require("../../helper-hardhat-config")

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Vault Unit Tests", function () {
        let token, receipt, oracle, vault, user, deployer
        const chainId = network.config.chainId
        
        beforeEach(async () => {
            deployer = (await getNamedAccounts()).deployer
            await deployments.fixture(["all"])
            token = await ethers.getContract("StableCoinToken", deployer)
            vault = await ethers.getContract("Vault", deployer)
        })

    })
