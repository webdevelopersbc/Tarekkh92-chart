import { PRICEDISPLAY,RESETSTATE } from '../Types/AllTypes'
const initialState = {
    PriceVar: null,
};
const Price = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case PRICEDISPLAY:
            return {
                ...state,
                PriceVar: payload
            }
        case RESETSTATE:
            return {
                ...state,
                PriceVar: null,
            }
        default:
            return state;
    }
}

export { Price }
