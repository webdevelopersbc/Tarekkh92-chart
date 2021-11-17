import { useState } from "react";
import { ethers } from "ethers";
import NumberFormat from "react-number-format";

const PancakeSwapAbi = [
  "function getPair(address tokenA, address tokenB) external view returns (address pair)",
];
const provider = new ethers.providers.JsonRpcProvider(
"https://bsc-dataseed.binance.org/"
);

const factoryAddressV1 = "0xBCfCcbde45cE874adCB698cC183deBcF17952812";

const factoryAddressV2 = "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73";

export const getPair = async (tokenAddress, PeggedAddress) => {
  const factoryContractV2 = new ethers.Contract(
    factoryAddressV2,
    PancakeSwapAbi,
    provider
  );

  const factoryContractV1 = new ethers.Contract(
    factoryAddressV1,
    PancakeSwapAbi,
    provider
  );
  let BNBpairV1 = await factoryContractV1.getPair(PeggedAddress, tokenAddress).then()
  let BNBpairV2 = await factoryContractV2.getPair(PeggedAddress, tokenAddress).then();

  //console.log("Pair V2", pairV2)
  let pairArray = [BNBpairV1, BNBpairV2]
  return pairArray;
};




















// import { useState } from "react";
// import { ethers } from "ethers";
// import NumberFormat from "react-number-format";

// const PancakeSwapAbi = [
//   "function getPair(address tokenA, address tokenB) external view returns (address pair)",
// ];
// const provider = new ethers.providers.JsonRpcProvider(
// "https://bsc-dataseed.binance.org/"
// );

// const factoryAddressV1 = "0xBCfCcbde45cE874adCB698cC183deBcF17952812";

// const factoryAddressV2 = "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73";


// // export const getPairV1 = async (tokenAddress) => {
// //   const factoryContractV1 = new ethers.Contract(
// //     factoryAddressV1,
// //     PancakeSwapAbi,
// //     provider
// //   );
 

     
// //   let pairV1 = await factoryContractV1.getPair(bnbAddress, tokenAddress).then();

// //   console.log("Pair V1", pairV1)
 
// //   return pairV1;
// // };

// export const getPair = async (tokenAddress, OtherAddress) => {
//   const factoryContractV2 = new ethers.Contract(
//     factoryAddressV2,
//     PancakeSwapAbi,
//     provider
//   );

//   let pairV2 = await factoryContractV2.getPair(OtherAddress, tokenAddress).then();

//   //console.log("Pair V2", pairV2)
 
//   return pairV2;
// };

