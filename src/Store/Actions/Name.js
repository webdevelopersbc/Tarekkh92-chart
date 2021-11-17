import { NAMEDISPLAY } from '../Types/AllTypes'
import {
    Name,
} from "../../Data/MarketCap";
export const GetTokenNameVar = (_address) => async (dispatch) => {
    try {
        let nameDisplay = await Name(_address);
        console.log(nameDisplay, `action nameDisplay`);
        dispatch({
            type: NAMEDISPLAY,
            payload: nameDisplay
        });
    } catch (error) {
        console.log(`error --> ${error}`);
    }

};
