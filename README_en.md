### <p align="center">EthGoat</p>
#### <p align="center">基于HardHat框架,在Sepolia发行一个ERC20</p>
#### <p align="center"><a href="https://github.com/jeffcail/ethgoat/releases"><img src="https://img.shields.io/github/release/ethgoat/releases.svg" alt="GitHub release"></a><a href="https://github.com/jeffcail/ethgoat/blob/master/LICENSE"><img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license"></a><p>
#### <p align="center"><a href="./README.md" target="_blank">简体中文</a> | <a href="./README_en.md" target="_blank">English</a> </p>

## Tips
> This code is just an example, do not use it directly

# EthGoat ERC20合约
> Based on the HardHat framework, an ERC20 is issued in Sepolia
> Solidity，Hardhat，Token standard，Interoperability, ERC-20

## Faucets
Chainlink testnet faucet: https://faucets.chain.link
Alchemy testnet faucet: https://sepoliafaucet.com/
Infura testnet faucet: https://www.infura.io/faucet/sepolia

## Install Dependencies
```shell
npm install 
```

## Deployment, default HARDHAT NETWORK
```shell
npx hardhat run scripts/deployEthGoat.js
```

## Deploy the contract to the sepolia test network
## Alchemy SELECT sepolia

```shell
npx hardhat run scripts/deployEthGoat.js --network sepolia
```

## Contract Name
```markdown
EthGoat
```

## contract address
<a href="https://sepolia.etherscan.io/" _target="_blank">sepolia浏览器</a>

## env-enc
```
npm install --save-dev @chainlink@env-enc
npx env-enc set-pw
```

## Verfiy the contract
https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-verify
```shell
npx hardhat verify --network sepolia 0xb2bdF796373ae527Cf645dc1b0b0489B7dFA65b3
```

## Task
```shell
npx hardhat deploy_ethgoat --network sepolia
npx hardhat interact_ethgoat --network sepolia
```

## Deploy the contract to the sepolia test network
```shell
npx hardhat run scripts/deployEthGoat.js --network sepolia
```