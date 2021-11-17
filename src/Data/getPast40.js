import {getPairArrayV2} from './getPairArrayV2';
import {getPairArrayV1} from './getPairArrayV1';
import { ethers } from "ethers";
import {getBlockTime} from './getBlocktime'
const axios = require("axios")

const client = axios.create({
  baseURL: 'https://bsc.streamingfast.io/subgraphs/name/pancakeswap/exchange-v2'
})



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

export const getListOfpast40 = async (token) => {
    const response = await graphql.getTrasactions(token, 40)
  
    let transactions = []
    
    if (response &&
      response.data &&
      response.data.data &&
      response.data.data.swaps) {
      transactions = response.data.data.swaps.map((swap) => {
        const transaction = {}
  
        const amount0 = Math.abs(swap.amount0In - swap.amount0Out)
        const amount1 = Math.abs(swap.amount1In - swap.amount1Out)
        const priceInWBNB = amount1 / amount0
        const priceInUSD = (swap.amountUSD / amount1) * priceInWBNB
  
        transaction.type = swap.amount0In > swap.amount0Out ? 'Buy' : 'Sell'
        transaction.time = new Date(Number(swap.timestamp) * 1000)
        transaction.id = swap.transaction.id
        transaction.amount = amount0
        transaction.amountInUSD = (amount0 * priceInUSD)
        transaction.priceInUSD = priceInUSD
  
        return transaction
      })
      console.log(transactions)

      return transactions
    }
  }

const graphql = {
    getTrasactions: (token, first) => client.post(
      '', {
      query: `query ($token: String, $first: Int) {
          swaps(first: $first,
            orderBy: timestamp,
            orderDirection: desc,
            where: {
              token0: $token
              token1: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"
            }) {
            timestamp
            token0 {
              symbol
              id
              name
            }
            token1 {
              symbol
              id
              name
            }
            amount0In
            amount1In
            amount0Out
            amount1Out
            amountUSD
            transaction {
              id
            }
          }
        }
        `,
      variables: { token, first }
    }),

  }
  



export const getListOfpast402 = async (tokenAddress) => {

    let PairArray = await getPairArrayV2(tokenAddress)
    let BnbPair = PairArray[0]
    //console.log(BnbPair);

    let blockNum = await provider.getBlockNumber()
    //console.log(blockNum);

    let filter = TokenContract.filters.Transfer(BnbPair);
    //console.log(filter);

    let eventsWith = await TokenContract.queryFilter(filter, blockNum - 5000, blockNum);
    let last40 = [];

    for (let i = 1; i <= 40; i++) {

        //console.log(eventsWith[eventsWith.length - i])
        let currentEvent = eventsWith[eventsWith.length - i]
        //console.log(currentEvent.blockNumber)
        getBlockTime(currentEvent.blockNumber)

        last40.push(currentEvent)
    }

    return last40;

}