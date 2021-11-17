import { TOKENPRICEPERCENT } from '../Types/AllTypes'
import { getTokenPrices } from "../../graphql"

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

async function percentage(_address, currentPrice) {
    try {
        let prices = await getTokenPrices(_address)
        console.log(prices)
        let priceToday = currentPrice
        let priceYesterday = prices.d1

        console.log(priceToday)
        console.log(priceYesterday)
        //console.log(priceYesterday/priceToday)
        let top = priceYesterday - priceToday
        let frac = top / priceYesterday
        let final = frac * 100
        return (final)
    } catch (error) {
        console.log(`error --> ${error}`);
    }

}
export const GetPricePer = (_address) => async (dispatch) => {
    try {
        let price = await GetPrice(_address);
        let pricePercent = (await percentage(_address, price)).toFixed(2)
        console.log(pricePercent, `action pricePercent`);
        dispatch({
            type: TOKENPRICEPERCENT,
            payload: pricePercent
        });
    } catch (error) {
        console.log(`error --> ${error}`);
    }

};
