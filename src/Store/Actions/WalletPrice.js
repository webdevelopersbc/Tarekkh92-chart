import { ethers } from "ethers";
import { WALLET_PRICE } from './../Types/AllTypes'
import {GetPrice} from '../../Data/GetWalletPrice'
// const GetPrice = async (tokenAddress) => {
//     try {
//         let url = ("https://api.pancakeswap.info/api/v2/tokens/" + tokenAddress);

//         const response = await fetch(url);
//         const tokenInfo = await response.json();
//         let price = tokenInfo.data.price
//         let floatPrice = parseFloat(price);
//         // console.log(floatPrice)
//         return floatPrice
//     } catch (error) {
//         console.log(`error --> ${error}`);
//     }


// }
let BabyDogeAddress = "0xc748673057861a797275cd8a068abb95a902e8de";
const getWalletBalanceUSD = async (WalletBal, tokenPrice) => {
    try {
        let balUsd = WalletBal * tokenPrice
        console.log(balUsd, 'balUsd')

        return balUsd
    } catch (error) {
        console.log(`error-->`, error);
    }


}

const getWalletBalance = async (userAddress, tokenAddress) => {
    try {
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

        const tokenContract = new ethers.Contract(tokenAddress, tokenAbi, provider);

        let bal = await tokenContract.balanceOf(userAddress)
        let decimals = await tokenContract.decimals()
        let balFormat = (bal.toString() / 10 ** decimals).toPrecision(6);
        return balFormat;
    } catch (error) {
        console.log(`error-->`, error);
    }

}
export const GetWallePrice = (userAddress) => async (dispatch) => {
    try {
        //await getHolders(BabyDogeAddress)
        let price = await GetPrice(BabyDogeAddress)
        let bal = await getWalletBalance(userAddress, BabyDogeAddress)
        let walletBLC = await getWalletBalanceUSD(bal, price)
        console.log(walletBLC, 'walletBLC');
        dispatch({
            type: WALLET_PRICE,
            walletBLC
        });
    } catch (error) {
        console.log(`error --> ${error}`);
    }

};

