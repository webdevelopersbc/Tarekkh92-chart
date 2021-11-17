import { WTSxUSERADDRESS } from './../Types/AllTypes'
import { GetPrice } from '../../Data/GetWalletPrice'
import { ethers } from "ethers";
import { getListOfpast40 } from '../../Data/getPast40'
import { getTranObjects } from '../../Data/getTransObj'
import { getWalletTranObjects } from '../../Data/getwalletTransObj'
import { getWalletBalance } from '../../Data/getwalletbalance'
import { getWalletBalanceUSD } from '../../Data/getWBUsd'
import {getPair} from '../../Data/getPairArrayV2'
import { getWalletPast } from '../../Data/getWalletPast'
let BabyDogeAddress = "0xc748673057861a797275cd8a068abb95a902e8de";

//the input here should be the tokenAddress inputed too
//added tokenAddress argument

export const GetWalletTransUA = (Address) => async (dispatch) => {
    console.log(Address,'Address');
    let { tokenAddress, userAddress } = Address
    console.log("WTSxUserAd")
    try {
        //await getHolders(BabyDogeAddress)

        //should take the tokenAddress as the input (BabyDogeAddress is just in here for testing)
        //anywhere it says BabyDogeAddress it should intake the tokenAddress variable


        let price = await GetPrice(tokenAddress) // (1)
        // //gets inputed into the getWalletTranObjects
        let walletTransRaw = await getWalletPast(tokenAddress, userAddress)
        let walletTransObjects = await getWalletTranObjects(walletTransRaw, tokenAddress, userAddress) //in 4th tab of table 
        console.log(walletTransObjects, 'walletTransObjects')
        console.log(walletTransObjects.length)
        // console.log(walletTransObjects.length)

        let bal = await getWalletBalance(userAddress, tokenAddress) // (2) This should be the wallet balance in tokens should show as (13.6M)
        let walletBALANCE = await getWalletBalanceUSD(bal, price) // (3)this should be the wallet balance, should show as ($324.43)
        // console.log(walletBLC, 'walletBLC');
        dispatch({
            type: WTSxUSERADDRESS,
            walletTrOBJ: walletTransObjects,
            walletBALANCE
        });
    } catch (error) {
        console.log(`error --> ${error}`);
    }

};

