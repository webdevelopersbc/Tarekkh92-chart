import { WALLET_TRANS_OBJECT } from './../Types/AllTypes'
import { GetPrice } from '../../Data/GetWalletPrice'
import { getListOfpast40 } from '../../Data/getPast40'
import { getTranObjects } from '../../Data/getTransObj'
import { getWalletTranObjects } from '../../Data/getwalletTransObj'
import { getWalletBalance } from '../../Data/getwalletbalance'
import { getWalletBalanceUSD } from '../../Data/getWBUsd'
import { getWalletPast } from '../../Data/getWalletPast'
let BabyDogeAddress = "0xc748673057861a797275cd8a068abb95a902e8de";

//the input here should be the tokenAddress inputed too
//added tokenAddress argument
export const GetWalletTransObj = (tokenAddress) => async (dispatch) => {
    try {
        //await getHolders(BabyDogeAddress)

        //should take the tokenAddress as the input (BabyDogeAddress is just in here for testing)
        //anywhere it says BabyDogeAddress it should intake the tokenAddress variable
        // let { tokenAddress } = Address

        // let price = await GetPrice(tokenAddress) // (1)/
        //await getHolders(BabyDogeAddress)

        //first 40 of transaction array (table 1 onload )
        //  let transRaw = await getListOfpast40(tokenAddress)
        //  let transObjects = await getTranObjects(transRaw, tokenAddress)   //  in the 1st tab of the table
        //  console.log(transObjects, ` action(transObjects)`)


        // let { tokenAddress, userAddress } = Address


         //only when we enter user address (table 4 on click)
        // console.log("starting wallet trans")
        // // //gets inputed into the getWalletTranObjects
        let walletTransRaw = await getWalletPast((tokenAddress), userAddress)
        // console.log(walletTransRaw,'walletTransRaw')
        let walletTransObjects = await getWalletTranObjects(walletTransRaw, tokenAddress, userAddress) //in 4th tab of table 
        // console.log(walletTransObjects,'walletTransObjects')
        // console.log(walletTransObjects.length)
        // // console.log(walletTransObjects.length)

        // let bal = await getWalletBalance(userAddress, tokenAddress) // (2) This should be the wallet balance in tokens should show as (13.6M)
        // let walletBLC = await getWalletBalanceUSD(bal, price) // (3)this should be the wallet balance, should show as ($324.43)
        // console.log(walletBLC, 'walletBLC');
        dispatch({
            type: WALLET_TRANS_OBJECT,
            // WTO: walletTransObjects,
            TransObj:walletTransObjects,
            // walletBLC
        });
    } catch (error) {
        console.log(`error --> ${error}`);
    }

};

