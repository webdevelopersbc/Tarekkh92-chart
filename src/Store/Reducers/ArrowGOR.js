import { ARROWCHANGE, RESETSTATE } from '../Types/AllTypes'
const initialState = {
    PriceArrow: null,
};
const PRICEARROW = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case ARROWCHANGE:
            return {
                ...state,
                PriceArrow: payload
            }
        case RESETSTATE:
            return {
                ...state,
                PriceArrow: null,
            }
        default:
            return state;
    }
}

export { PRICEARROW }
