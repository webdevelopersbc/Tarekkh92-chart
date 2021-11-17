import { ethers } from "ethers";

const busdAddress = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
const usdtAddress = "0x55d398326f99059ff775485246999027b3197955";
const bnbAddress = "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c";


let BnbPairV1;
let busdPairV1;
let usdtPairV1;

const PancakeSwapAbi = [
    "function getPair(address tokenA, address tokenB) external view returns (address pair)",
];

const factoryAddressV1 = "0xBCfCcbde45cE874adCB698cC183deBcF17952812";

//       ---------------------

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

export const getPairArrayV1 = async (tokenAddress) => {

    const factoryContractV1 = new ethers.Contract(
        factoryAddressV1,
        PancakeSwapAbi,
        provider
    );

        
    BnbPairV1 = await factoryContractV1.getPair(bnbAddress, tokenAddress);
    busdPairV1 = await factoryContractV1.getPair(busdAddress, tokenAddress);
    usdtPairV1 = await factoryContractV1.getPair(usdtAddress, tokenAddress);

    let pairArray = [BnbPairV1, busdPairV1, usdtPairV1]
    console.log(BnbPairV1, "V1 Pair BNB ");
    console.log(busdPairV1, "V1 Pair BUSD");
    console.log(usdtPairV1, "V1 Pair USDT");
    return pairArray;
};