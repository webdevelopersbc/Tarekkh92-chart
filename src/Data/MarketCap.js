import { useState } from "react";
import { ethers } from "ethers";
import NumberFormat from "react-number-format";


const erc20ABI = [
  "function totalSupply() public view returns (uint256)",
  "function balanceOf(address _owner) public view returns (uint256 balance)",
  "function decimals() public view virtual override returns (uint8)",
  "function name() public view returns (string)",
  "function symbol() public view returns (string)",
];

const provider = new ethers.providers.JsonRpcProvider(
"https://bsc-dataseed.binance.org/"
);

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});


export const MaxSupply = async (tokenAddress) => {
  const tokenContract = new ethers.Contract(tokenAddress, erc20ABI, provider);
  const totalSupply = await tokenContract.totalSupply();
  let totalSupplyRaw = totalSupply.toLocaleString("fullwide", {
    useGrouping: false,
  });
  const zeros = Decimals(tokenAddress);
  while (totalSupplyRaw.charAt(totalSupplyRaw.length - 1) == "0" && zeros > 0) {
    totalSupplyRaw = totalSupplyRaw.slice(0, -1);
    zeros -= 1;
  }
  const decimals = await tokenContract.decimals();
  let Supply = totalSupplyRaw/ 10 ** decimals;
  return Supply.toFixed(2);
};


export const CirculatingSupply = async (tokenAddress) => {
  const tokenContract = new ethers.Contract(tokenAddress, erc20ABI, provider);
  const deadBal = await tokenContract.balanceOf(
    "0x000000000000000000000000000000000000dead"
  );
  const decimals = await tokenContract.decimals();
  const totalSupply = await tokenContract.totalSupply();

  const deadBal2 = await tokenContract.balanceOf("0x0000000000000000000000000000000000000001");
  const deadBal3 = await tokenContract.balanceOf("0x0000000000000000000000000000000000000000");

  const circulatingSupply = (totalSupply - deadBal - deadBal2 - deadBal3) / 10 ** decimals;


  return  circulatingSupply;
};

export const MarketCap = async (tokenAddress, price, circulatingSupply) => {

  const MarketCapUsd = price * circulatingSupply;

  return formatter.format(MarketCapUsd);
};


export const Get24Time = () => {
  const today = new Date().toLocaleString();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayData = yesterday.toLocaleString();
  return today, yesterdayData;
  //console.log(today);
  //console.log(yesterdayData);
};

export const Name = async (tokenAddress) => {
  const tokenContract = new ethers.Contract(tokenAddress, erc20ABI, provider);
  const name = await tokenContract.name();
  return name;
};

export const Symbol = async (tokenAddress) => {
  const tokenContract = new ethers.Contract(tokenAddress, erc20ABI, provider);
  const symbol = await tokenContract.symbol();
  return symbol;
};

export const Decimals = async (tokenAddress) => {
  const tokenContract = new ethers.Contract(tokenAddress, erc20ABI, provider);
  const decimal = await tokenContract.decimals();
  return decimal;
};
