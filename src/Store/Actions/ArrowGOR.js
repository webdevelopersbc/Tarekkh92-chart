import { ARROWCHANGE } from '../Types/AllTypes'
import { getTokenPrices } from "../../graphql"

export const GetPRICEARROWCOMP = (_address) => async (dispatch) => {
    try {
        let prices = await getTokenPrices(_address)
        console.log(prices, 'prices')
        let priceToday = prices.d0
        let priceYesterday = prices.d1

        console.log(priceToday, 'priceToday')
        console.log(priceYesterday, 'priceYesterday')
        //console.log(priceYesterday/priceToday)
        if (priceToday > priceYesterday) {
            //Green and Up
            dispatch({
                type: ARROWCHANGE,
                payload: true
            });
            return true;
        } else {
            //red and down
            console.log(priceToday / priceYesterday)
            dispatch({
                type: ARROWCHANGE,
                payload: false
            });
            return false
        }
    } catch (error) {
        console.log(`error --> ${error}`);
    }

};
