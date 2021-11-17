import { MARKETCAP,RESETSTATE } from '../Types/AllTypes'
const initialState = {
    MarketCapVar: null,
};
const MARKETcap = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case MARKETCAP:
            return {
                ...state,
                MarketCapVar: payload
            }
        case RESETSTATE:
            return {
                ...state,
                MarketCapVar: null,
            }
        default:
            return state;
    }
}

export { MARKETcap }
