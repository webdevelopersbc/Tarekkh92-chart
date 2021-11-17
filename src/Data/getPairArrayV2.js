import { ethers } from "ethers";

let busdAddress = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
let usdtAddress = "0x55d398326f99059ff775485246999027b3197955";

let BnbPair;
let busdPair;
let usdtPair;
let BnbPairV1;
let busdPairV1;
let usdtPairV1;

const PancakeSwapAbi = [
    "function getPair(address tokenA, address tokenB) external view returns (address pair)",
];

const factoryAddressV2 = "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73";
const factoryAddressV1 = "0xBCfCcbde45cE874adCB698cC183deBcF17952812";

//       ---------------------
const bnbAddress = "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c";

const tokenAbi = [
    "function balanceOf(address owner) view returns (uint256)",
    "function decimals() public view virtual override returns (uint8)",
    "function name() public view returns (string)",
    "function symbol() public view returns (string)",
    "event Transfer(address indexed from, address indexed to, uint amount)",
    "function totalSupply() external view returns (uint256)",
];

const provider = new ethers.providers.JsonRpcProvider(
    "https://bsc-dataseed.binance.org/"
);
export const getPairArrayV2 = async (tokenAddress) => {
    const factoryContractV2 = new ethers.Contract(
        factoryAddressV2,
        PancakeSwapAbi,
        provider
    );

    BnbPair = await factoryContractV2.getPair(bnbAddress, tokenAddress);
    busdPair = await factoryContractV2.getPair(busdAddress, tokenAddress);
    usdtPair = await factoryContractV2.getPair(usdtAddress, tokenAddress);


    let pairArray = [BnbPair, busdPair, usdtPair]
    console.log(BnbPair, "V2 Pair BNB ");
    console.log(busdPair, "V2 Pair BUSD");
    console.log(usdtPair, "V2 Pair USDT");
    return pairArray;
};