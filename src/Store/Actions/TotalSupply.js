import { TOTALSUPPLY } from '../Types/AllTypes'
import {
    MaxSupply
} from "../../Data/MarketCap";
export const GetTotalSupply = (_address) => async (dispatch) => {
    try {
        let maxSupply = await MaxSupply(_address);
        console.log(maxSupply, `action maxSupply`);
        dispatch({
            type: TOTALSUPPLY,
            payload: maxSupply
        });
    } catch (error) {
        console.log(`error --> ${error}`);
    }

};
