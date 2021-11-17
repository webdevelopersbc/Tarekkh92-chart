import { PRICEDISPLAY } from '../Types/AllTypes'
import fromExponential from 'from-exponential';
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
export const GetPriceVar = (_address) => async (dispatch) => {
    try {
        let price = await GetPrice(_address);
        let priceDisplay = fromExponential(price.toPrecision(6))
        let dispalyprice = priceDisplay
        console.log(dispalyprice, `action dispalyprice`);
        dispatch({
            type: PRICEDISPLAY,
            payload: dispalyprice
        });
    } catch (error) {
        console.log(`error --> ${error}`);
    }

};
