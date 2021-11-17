import { ethers } from "ethers";
const provider = new ethers.providers.JsonRpcProvider(
    "https://bsc-dataseed.binance.org/"
);
export const getBlockTime = async (block) => {

    let blockInfo = await provider.getBlock(block)
    //console.log(blockInfo)
    let timeUnix = blockInfo.timestamp
    //console.log( timeUnix.toLocaleString('en-US', { hour: 'numeric', hour12: true }))
    var date = new Date(timeUnix * 1000).toLocaleTimeString()
    return (date);

}