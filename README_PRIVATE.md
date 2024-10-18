### <p align="center">EthGoat</p>
#### <p align="center">基于HardHat框架,在Sepolia发行一个ERC20</p>
#### <p align="center"><a href="https://github.com/jeffcail/ethgoat/releases"><img src="https://img.shields.io/github/release/ethgoat/releases.svg" alt="GitHub release"></a><a href="https://github.com/jeffcail/ethgoat/blob/master/LICENSE"><img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license"></a><p>
#### <p align="center"><a href="./README.md" target="_blank">简体中文</a> | <a href="./README_en.md" target="_blank">English</a> </p>

# EthGoat ERC20合约
> 基于HardHat框架,在Sepolia发行一个ERC20

## 地址
```markdown
个人对外一
account1
account2
```

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
> 0xd13BB7c1ad72427Fc57E79d92dfec9fedcc0f55a
> 0x71E2aB85BcF9428047e5613B3e47E62E627cabb5
> 0xb2bdF796373ae527Cf645dc1b0b0489B7dFA65b3
> 0x5FbDB2315678afecb367f032d93F642f64180aa3
> 0x22153Add96816adA123C1fB0E888d3ecB0ef7aFA
> 0x5FbDB2315678afecb367f032d93F642f64180aa3
> 0xc60296daD404F436657e88AA151299b04BfFC3B0
> 0xFC3C5d92656f840F80D60095f577f4FB5602907A
> 0x4DFA1123DF3E8b496e5fdB8ceEC346703262D2C6

## env-enc
pw: 123456
```
npm install --save-dev @chainlink@env-enc
npx env-enc set-pw
```

## 验证合约
https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-verify
```shell
npx hardhat verify --network sepolia 0xb2bdF796373ae527Cf645dc1b0b0489B7dFA65b3
```