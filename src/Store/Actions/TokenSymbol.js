import { TOKENSYMBOLDISPLAY } from '../Types/AllTypes'
import {
    Symbol
} from "../../Data/MarketCap";
export const GetTokenSymbol = (_address) => async (dispatch) => {
    try {
        let tsymbol = await Symbol(_address);
        console.log(tsymbol, `action tsymbol`);
        dispatch({
            type: TOKENSYMBOLDISPLAY,
            payload: tsymbol
        });
    } catch (error) {
        console.log(`error --> ${error}`);
    }

};
