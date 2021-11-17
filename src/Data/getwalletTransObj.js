import { ethers } from "ethers";
import {getPairArrayV2} from './getPairArrayV2'
import {GetPrice} from './GetWalletPrice'
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


const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
});
export const getWalletTranObjects = async (pastWalletTrans, tokenAddress, userAddress) => {
console.log(pastWalletTrans,tokenAddress,'tokenAddress pastWalletTrans')


    let PairArrayV2 = await getPairArrayV2(tokenAddress)
    let BnbPair = ethers.utils.getAddress(PairArrayV2[0]);
    let busdPair = ethers.utils.getAddress(PairArrayV2[1]);
    let usdtPair = ethers.utils.getAddress(PairArrayV2[2]);
    //console.log(pairArray)

    const TokenContract = new ethers.Contract(tokenAddress, tokenAbi, provider);
    let decimals = await TokenContract.decimals()
    let price = await GetPrice(tokenAddress)

    let transObjects = []

    let trans = pastWalletTrans.result
    let rawTxHashBuy, rawTxHashSell;
    let currentEvent;
    for (let i = 0; i <= trans.length - 1; i++) {

        
        //console.log(trans[0].blockNumber)
        //console.log(typeof(BnbPair))
        if (ethers.utils.getAddress(trans[i].from) === BnbPair || ethers.utils.getAddress(trans[i].from) === busdPair || ethers.utils.getAddress(trans[i].from) === usdtPair) {
            console.log("inside if")
            currentEvent = trans[i]
            rawTxHashBuy = currentEvent.hash;
            //console.log(typeof(rawTxHashBuy), "rawTxHashBuy");
            let transactionObject = {
                user: currentEvent.to,
                rawHash: rawTxHashBuy,
                thash: rawTxHashBuy.substring(0, 6) + "..." + rawTxHashBuy.substring(rawTxHashBuy.length - 4),
                tokenSellorBuy: (currentEvent.value.toString() / 10 ** decimals).toPrecision(6),
                Timestamp: new Date(currentEvent.timeStamp * 1000).toLocaleString(),
                ValueUsd: formatter.format((currentEvent.value.toString() / 10 ** decimals) * price),
                Buy: true,
                buySell: "Buy",
                All: 'All'
            }
            transObjects.push(transactionObject)
        } else if (ethers.utils.getAddress(trans[i].to) === BnbPair || ethers.utils.getAddress(trans[i].to) === busdPair || ethers.utils.getAddress(trans[i].to) === usdtPair) {
            currentEvent = trans[i]
            rawTxHashSell = currentEvent.hash;
            let transactionObject = {
                user: currentEvent.from,
                rawHash: rawTxHashSell,
                thash: rawTxHashSell.substring(0, 6) + "..." + rawTxHashSell.substring(rawTxHashSell.length - 4),
                tokenSellorBuy: (currentEvent.value.toString() / 10 ** decimals).toPrecision(6),
                Timestamp: new Date(currentEvent.timeStamp * 1000).toLocaleString(),
                ValueUsd: formatter.format((currentEvent.value.toString() / 10 ** decimals) * price),
                Buy: false,
                buySell: "Sell",
                All: 'All'
            }
            transObjects.push(transactionObject)
        }

    }
    console.log(transObjects,'transObjects')

    return transObjects
}