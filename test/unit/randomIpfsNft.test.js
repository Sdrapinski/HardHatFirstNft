const { assert } = require("chai");
const { network, deployments, ethers } = require("hardhat");
const { developmentChains } = require("../../helper-hardhat-config");

!developmentChains.includes(network.name)
  ? describe.skip
  : describe("random NFT unit Tests", async function () {
      let deployer, randomNft;
      beforeEach(async () => {
        accounts = await ethers.getSigners();
        deployer = accounts[0];
        await deployments.fixture(["basicnft"]);
        randomNft = await ethers.getContract("RandomIpfsNFT");
      });

      describe("Construtor", () => {
        it("Initilizes the NFT Correctly.", async () => {
          const dogTokenUriZero = await randomNft.getDogTokenUris(0);
          assert(dogTokenUriZero.includes("ipfs://"));
        });
      });
    });
