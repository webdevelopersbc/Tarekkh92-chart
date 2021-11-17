import { TOKENLIQUIDITY } from '../Types/AllTypes'
import { getPair } from "../../Data/GetPair";
import getBNBPrice from "../../index";
import { ethers } from "ethers";
const tokenAbi = [
    "function balanceOf(address owner) view returns (uint256)",
    "function decimals() public view virtual override returns (uint8)",
    "function name() public view returns (string)",
    "function symbol() public view returns (string)",
    "event Transfer(address indexed from, address indexed to, uint amount)",
];
const provider = new ethers.providers.JsonRpcProvider(
    "https://bsc-dataseed.binance.org/"
);
const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
});
const getLiquidity = async (V1Address ,V2Address, bnbPrice) => {
    try {
        const tokenContract = new ethers.Contract('0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', tokenAbi, provider);
        

        const SupplyV1 = await tokenContract.balanceOf(V1Address);
        const SupplyV2 = await tokenContract.balanceOf(V2Address);

        let AmountOfBnbV1 = SupplyV1 / 1000000000000000000;
        let AmountOfBnbV2 = SupplyV2 / 1000000000000000000;


        const LiquidityUsdV1 = bnbPrice * AmountOfBnbV1;
        const LiquidityUsdV2 = bnbPrice * AmountOfBnbV2;

        let liquidityArray = [formatter.format(LiquidityUsdV1), formatter.format(LiquidityUsdV2)]

        return liquidityArray;
    } catch (error) {
        console.log(`error --> ${error}`);
    }

};
export const GetTokenLiquidity = (_address) => async (dispatch) => {
    try {


        const bnbAddress = "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c";
        let bnbPairArray = await getPair(_address, bnbAddress);
        let bnbPairV1 = bnbPairArray[0]
        let bnbPairV2 = bnbPairArray[1]
        console.log(bnbPairV2,'bnbPairV2');
        let bnbPrice = await getBNBPrice('0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c')
        let TokenLiquidity = await getLiquidity(bnbPairV1,bnbPairV2, bnbPrice)
        console.log(TokenLiquidity, `action liquidityVar`);
        dispatch({
            type: TOKENLIQUIDITY,
            payload: TokenLiquidity
        });
    } catch (error) {
        console.log(`error --> ${error}`);
    }

};













// import { TOKENLIQUIDITY } from '../Types/AllTypes'
// import { getPair } from "../../Data/GetPair";
// import getBNBPrice from "../../index";
// import { ethers } from "ethers";
// const tokenAbi = [
//     "function balanceOf(address owner) view returns (uint256)",
//     "function decimals() public view virtual override returns (uint8)",
//     "function name() public view returns (string)",
//     "function symbol() public view returns (string)",
//     "event Transfer(address indexed from, address indexed to, uint amount)",
// ];
// const provider = new ethers.providers.JsonRpcProvider(
//     "https://bsc-dataseed.binance.org/"
// );
// const formatter = new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//     minimumFractionDigits: 2,
// });
// const getLiquidity = async (_pairAddress, bnbPrice) => {
//     try {
//         const tokenContract = new ethers.Contract('0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', tokenAbi, provider);

//         const Supply = await tokenContract.balanceOf(_pairAddress);

//         let AmountOfBnb = Supply / 1000000000000000000;

//         const LiquidityUsd = bnbPrice * AmountOfBnb;

//         return formatter.format(LiquidityUsd);
//     } catch (error) {
//         console.log(`error --> ${error}`);
//     }

// };
// export const GetTokenLiquidity = (_address) => async (dispatch) => {
//     try {


//         const bnbAddress = "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c";
//         let bnbPair = await getPair(_address, bnbAddress);
//         let bnbPrice = await getBNBPrice('0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c')
//         let TokenLiquidity = await getLiquidity(bnbPair, bnbPrice)
//         console.log(TokenLiquidity, `action liquidityVar`);
//         dispatch({
//             type: TOKENLIQUIDITY,
//             payload: TokenLiquidity
//         });
//     } catch (error) {
//         console.log(`error --> ${error}`);
//     }

// };
