import { TRANSACTION } from '../Types/AllTypes'
import {
    Decimals,
} from "../../Data/MarketCap";
import { getPairArrayV2 } from "../../Data/getPairArrayV2";
import { getPairArrayV1 } from "../../Data/getPairArrayV1";

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
const pairAbi = ["event Swap(address indexed sender, uint amount0In, uint amount1In,uint amount0Out, uint amount1Out, address indexed to)",];
const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
});
export const GetTransactions = (_address) => async (dispatch) => {
    const checkTransactions = async (tokenAddress, price, decimals) => {

        

        //this Data is the one
        //0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82
        const checkTransactionsInternal = async (tokenAddress, price, decimals) => {
            try {

                let PairArrayV2 = await getPairArrayV2(tokenAddress)
                let bnbPairV2 = ethers.utils.getAddress(PairArrayV2[0]);
                let busdPairV2 = ethers.utils.getAddress(PairArrayV2[1]);
                let usdtPairV2 = ethers.utils.getAddress(PairArrayV2[2]);
            
                let PairArrayV1 = await getPairArrayV1(tokenAddress)
                let bnbPairV1 = ethers.utils.getAddress(PairArrayV1[0]);
                let busdPairV1 = ethers.utils.getAddress(PairArrayV1[1]);
                let usdtPairV1 = ethers.utils.getAddress(PairArrayV1[2]);


                //onMethod listens to specific events
                const tokenContract = new ethers.Contract(tokenAddress, tokenAbi, provider);
                

                tokenContract.on("Transfer", (from, to, value, event2) => {
                    if (from == bnbPairV2 || from == busdPairV2 || from == usdtPairV2 || from == bnbPairV1 || from == busdPairV1 || from == usdtPairV1 ) {

                        let rawTxHashBuy = event2.transactionHash
                        console.log(rawTxHashBuy)
                        let too = to
                        console.log(too)
                        let thashShortBuy = rawTxHashBuy.substring(0, 6) + "..." + rawTxHashBuy.substring(rawTxHashBuy.length - 4)
                        let transactionObject = {
                            user: to,
                            newObjectValBuy2: 'newBuy2',
                            newObjectValBuy3: 'newBuy3',
                            rawHash: rawTxHashBuy,
                            thash: thashShortBuy,
                            tokenSellorBuy: (value.toString() / 10 ** decimals).toPrecision(6),
                            Timestamp: new Date().toLocaleTimeString(),
                            ValueUsd: formatter.format((value.toString() / 10 ** decimals) * price),
                            Buy: true,
                            buySell: "Buy",
                            All: 'All'
                        }
                        dispatch({
                            type: TRANSACTION,
                            payload: transactionObject
                        });
                        // settransdata1(pre => pre && [transactionObject, ...pre])


                    } else if (to == bnbPairV2 || to == busdPairV2 || to == usdtPairV2 || to == bnbPairV1 || to == busdPairV1 || to == usdtPairV1 ) {
                        let rawTxHashSell = event2.transactionHash
                        console.log(rawTxHashSell)
                        let toose = to
                        console.log(toose)
                        let thashShortSell = rawTxHashSell.substring(0, 6) + "..." + rawTxHashSell.substring(rawTxHashSell.length - 4)
                        let transactionObject = {
                            user: from,
                            newObjectSelVal2: 'newSel2',
                            newObjectSelVal3: 'newSel3',
                            rawHash: rawTxHashSell,
                            thash: thashShortSell,
                            tokenSellorBuy: (value.toString() / 10 ** decimals).toPrecision(6),
                            Timestamp: new Date().toLocaleTimeString(),
                            ValueUsd: formatter.format((value.toString() / 10 ** decimals) * price),
                            Buy: false,
                            buySell: "Sell",
                            All: 'All'
                        }
                        dispatch({
                            type: TRANSACTION,
                            payload: transactionObject
                        });
                        // settransdata(pre => pre && [transactionObject, ...pre])
                    }
                });
            } catch (error) {
                console.log(`error --> ${error}`);
            }



        };
        checkTransactionsInternal(tokenAddress, price, decimals);
    };

    const GetPrice = async (tokenAddress) => {

        // need to do try and catch statement later
        let url = ("https://api.pancakeswap.info/api/v2/tokens/" + tokenAddress);

        const response = await fetch(url);
        const tokenInfo = await response.json();
        let price = tokenInfo.data.price
        let floatPrice = parseFloat(price);

        return floatPrice

    }
    try {
     
        let tprice = await GetPrice(_address);
        let decimals = await Decimals(_address);

        await checkTransactions(_address, tprice, decimals);
    } catch (error) {
        console.log(`error --> ${error}`);
    }

};