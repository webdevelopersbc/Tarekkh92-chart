import { getPair } from "./GetPair";
import { MarketCap, Name, Symbol, Get24Time } from "./MarketCap";

const axios = require("axios");

export const Volume = async (pairAddress) => {
  //time
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayData = yesterday;
  const todayCorrectFormat = today.toISOString();
  const yesterdayCorrectFormat = yesterdayData.toISOString();
  console.log(todayCorrectFormat, yesterdayCorrectFormat);
  try {
    const result = await axios.post("https://graphql.bitquery.io", {
      query: `    
query ($address: String! $start: ISO8601DateTime! $end: ISO8601DateTime!) 
{
ethereum (network: bsc){
dexTrades(options: {desc: "count"},
smartContractAddress:
{is: $address},
date: {since: $start, till: $end}
){
count
tradeAmount(in:USD)
}}
}



      `,
      variables: {
        address: pairAddress,
        start: yesterdayCorrectFormat,
        end: todayCorrectFormat,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });
    const volume = result.data.data.ethereum.dexTrades[0].tradeAmount;

    const volumeUSD = formatter.format(volume);
    return volumeUSD;
  } catch (error) {
    console.error(error);
  }
};
