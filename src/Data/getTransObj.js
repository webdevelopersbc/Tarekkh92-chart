import { ethers } from "ethers";
import {getPairArrayV2} from './getPairArrayV2'
import {getPairArrayV1} from './getPairArrayV1'
import {GetPrice} from './GetWalletPrice'
import  {getBlockTime} from './getBlocktime'
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

const TokenContract = new ethers.Contract(bnbAddress, tokenAbi, provider);

const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
});
export const getTranObjects = async (pastTrans, tokenAddress) => {

    const TokenContract = new ethers.Contract(tokenAddress, tokenAbi, provider);
    let transObjects = []
 
    let rawTxHashBuy, rawTxHashSell;
    for (let i = 0; i <= pastTrans.length - 1; i++) {

        if (pastTrans[i].type === "Buy") {
            let currentEvent = pastTrans[i]
            rawTxHashBuy = currentEvent.id;
            //let time = (new Date(currentEvent.time.toString()).toLocaleTimeString())
           // console.log(typeof(currentEvent.time.toString()))
           // console.log() // 2currentEvent.time.toString()))
           // console.log((currentEvent.time.toString()))
            let transactionObject = {
                user: "",
                rawHash: rawTxHashBuy,
                thash: rawTxHashBuy.substring(0, 6) + "..." + rawTxHashBuy.substring(rawTxHashBuy.length - 4),
                tokenSellorBuy: (currentEvent.amount.toPrecision(6)),
                Timestamp: (new Date(currentEvent.time.toString()).toLocaleTimeString()),
                ValueUsd: formatter.format((currentEvent.amountInUSD.toString())),
                Buy: true,
                buySell: "Buy",
                All: 'All'
            }
            transObjects.push(transactionObject)
        } else if  (pastTrans[i].type === "Sell")  {
            let currentEvent = pastTrans[i]
            rawTxHashSell = currentEvent.id;
            //let time = (new Date(currentEvent.time.toString()).toLocaleTimeString())

            let transactionObject = {
                user: "",
                rawHash: rawTxHashSell,
                thash: rawTxHashSell.substring(0, 6) + "..." + rawTxHashSell.substring(rawTxHashSell.length - 4),
                tokenSellorBuy: (currentEvent.amount.toPrecision(6)),
                Timestamp: (new Date(currentEvent.time.toString()).toLocaleTimeString()),
                ValueUsd: formatter.format((currentEvent.amountInUSD.toString())),
                Buy: false,
                buySell: "Sell",
                All: 'All'
            }
            transObjects.push(transactionObject)
        }

        //console.log(transObjects)
    }

    return transObjects
}