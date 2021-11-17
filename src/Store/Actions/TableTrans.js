import { TABLE_TRANS_OBJECT } from './../Types/AllTypes'
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
export const GetTableObj = (tokenAddress) => async (dispatch) => {
    console.log("TableTRans")
    try {
         let transRaw = await getListOfpast40(tokenAddress)
         let transObjects = await getTranObjects(transRaw, tokenAddress)   //  in the 1st tab of the table
         console.log(transObjects, ` action(transObjects)`)

        dispatch({
            type: TABLE_TRANS_OBJECT,
            // WTO: walletTransObjects,
            TransObj:transObjects,
            // walletBLC
        });
    } catch (error) {
        console.log(`error --> ${error}`);
    }

};

