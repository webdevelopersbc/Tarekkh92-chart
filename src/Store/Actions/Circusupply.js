import { CIRCULATINGSUPPLY } from '../Types/AllTypes'
import {
    CirculatingSupply
} from "../../Data/MarketCap";
export const GetCirculatingSupply = (_address) => async (dispatch) => {
    try {
        let circulatingSupply = await CirculatingSupply(_address);
        console.log(circulatingSupply, `action circulatingSupply`);
        dispatch({
            type: CIRCULATINGSUPPLY,
            payload: circulatingSupply
        });
    } catch (error) {
        console.log(`error --> ${error}`);
    }

};
