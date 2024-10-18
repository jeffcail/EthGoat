### <p align="center">EthGoat</p>
#### <p align="center">基于HardHat框架,在Sepolia发行一个ERC20</p>
#### <p align="center"><a href="https://github.com/jeffcail/ethgoat/releases"><img src="https://img.shields.io/github/release/ethgoat/releases.svg" alt="GitHub release"></a><a href="https://github.com/jeffcail/ethgoat/blob/master/LICENSE"><img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license"></a><p>
#### <p align="center"><a href="./README.md" target="_blank">简体中文</a> | <a href="./README_en.md" target="_blank">English</a> </p>

## Tips
> 此代码只是案例，切勿直接使用

# EthGoat ERC20合约
> 基于HardHat框架,在Sepolia发行一个ERC20
> Solidity，Hardhat，Token standard，Interoperability, ERC-20


## 水龙头
Chainlink 测试网水龙头：https://faucets.chain.link
Alchemy 测试网水龙头：https://sepoliafaucet.com/
Infura 测试网水龙头：https://www.infura.io/faucet/sepolia

## 安装依赖
```shell
npm install 
```

## 部署, 默认HARDHAT NETWORK
```shell
npx hardhat run scripts/deployEthGoat.js
```

## 将合约部署到sepolia测试网络
## Alchemy SELECT sepolia

```shell
npx hardhat run scripts/deployEthGoat.js --network sepolia
```

## 合约名称
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

## 验证合约
https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-verify
```shell
npx hardhat verify --network sepolia 0xb2bdF796373ae527Cf645dc1b0b0489B7dFA65b3
```

## 测试
```shell
npx hardhat deploy_ethgoat --network sepolia
npx hardhat interact_ethgoat --network sepolia
```

## 部署
```shell
npx hardhat run scripts/deployEthGoat.js --network sepolia
```
