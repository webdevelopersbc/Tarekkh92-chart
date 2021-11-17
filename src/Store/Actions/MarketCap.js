import { MARKETCAP } from '../Types/AllTypes'
import {
    MarketCap,
    CirculatingSupply,
} from "../../Data/MarketCap";
const GetPrice = async (tokenAddress) => {
    try {
        let url = ("https://api.pancakeswap.info/api/v2/tokens/" + tokenAddress);

        const response = await fetch(url);
        const tokenInfo = await response.json();
        let price = tokenInfo.data.price
        let floatPrice = parseFloat(price);

        return floatPrice
    } catch (error) {
        console.log(`error --> ${error}`);
    }


}
export const GetMARKETCAPVar = (_address) => async (dispatch) => {
    try {
        let price = await GetPrice(_address);
        let circulatingSupply = await CirculatingSupply(_address);
        let marketCap = await MarketCap(_address, price, circulatingSupply);
        console.log(marketCap, `action marketCap`);
        dispatch({
            type: MARKETCAP,
            payload: marketCap
        });
    } catch (error) {
        console.log(`error --> ${error}`);
    }

};
