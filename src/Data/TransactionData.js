// import { ethers } from "ethers";
// import { useState,useContext } from "react";
// import NumberFormat from "react-number-format";
// import Main from "../index";
// import {globalContext} from '../Context/GlobalState'

// const formatter = new Intl.NumberFormat("en-US", {
//   style: "currency",
//   currency: "USD",
//   minimumFractionDigits: 2,
// });

// const abi = [
//   "function balanceOf(address owner) view returns (uint256)",
//   "function decimals() public view virtual override returns (uint8)",
//   "event Transfer(address indexed from, address indexed to, uint amount)",
// ];
// const provider = new ethers.providers.JsonRpcProvider(
//   "https://speedy-nodes-nyc.moralis.io/1c2baaae7c0d11120337ddc1/bsc/mainnet"
// );
// export const checkTransactions = async (tokenAddress) => {

//   //   const [tokenAddress, setTokenAddress] = useState(
//   //     "0xba07eed3d09055d60caef2bdfca1c05792f2dfad"
//   //   );

//   let bnbAdd = ("");



//   //this Data is the one
//   const checkTransactionsInternal = async (tokenAddress) => {
    
//     //onMethod listens to specific events
//     const tokenContract = new ethers.Contract(tokenAddress, abi, provider);

//     tokenContract.on("Transfer", (from, to, value, event) => {
//       console.log("got the events!");

//       if (from === "0x045b8c3B5E60780E3B42348BAF39F2e0F3D7ffe5") {

//         //Create a transaction object and push to transaction array
//         //Varaible 1 - TransactionHash 

//         console.log(event.transactionHash, 'event.transactionHash');
//         //Varaible 2 - NumberOfTokens
//         console.log(value.toString(), 'tokenNUmber');
//         //Variable 3 - Timestamp (incomplete)
//         console.log("11:30:45")
//         //Variable 4 - ValueUsd (incomplete)
//         console.log("$452.45")
//         //Variable 5 - BuyOrSell (incomplete - Boolean will change text)
//         console.log("true")
//         let Tarray = []
//         let transactionObject = {
//           thash: event.transactionHash,
//           tokenBuy: value.toString(),
//           Timestamp: "11:30:45",
//           ValueUsd: "$452.45",
//           BuyOrSell: true
//         }
//         // let mergeObj = [{...transactionObject}]
//         Tarray = [...Tarray, transactionObject]

//         console.log(Tarray, 'Tarray')
//       } else if (to === "0x045b8c3B5E60780E3B42348BAF39F2e0F3D7ffe5") {
//         //Varaible 1 - Transaction Hash 
//         console.log(event.getTransaction(), 'event.transactionHash');
//         //Varaible 2 - Number of tokens that are bought/sold 
//         console.log("SELL:", value.toString());
//         //Variable 3 - Timestamp (incomplete)
//         console.log("11:30:45")
//         //console.log(value * Main(tokenAddress))
//         //Variable 4 - ValueUsd (incomplete)
//         console.log("$452.45")
//         //Variable 5 - BuyOrSell (incomplete - Boolean will change text)
//         console.log("true")
//         let transactionArray = []
//         let transactionObject = {
//           thash: event.transactionHash,
//           tokenSell: value.toString(),
//           Timestamp: "11:30:45",
//           ValueUsd: "$452.45",
//           BuyOrSell: true
//         }
//         // let mergeObject = [{...transactionObject}]
//         transactionArray = [...transactionArray, transactionObject]
//         console.log(transactionArray, 'transactionArray');
//       }
//     });
//   };
//   checkTransactionsInternal(tokenAddress);
// };



// export const getLiquidity = async (_pairAddress, bnbPrice) => {

//   const tokenContract = new ethers.Contract("0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", abi, provider);

//   const Supply = await tokenContract.balanceOf(_pairAddress);



//   let AmountOfBnb = Supply / 1000000000000000000;

//   const LiquidityUsd = bnbPrice * AmountOfBnb;

//   return formatter.format(LiquidityUsd);
// };