import { TOKENPRICEPERCENT, RESETSTATE } from '../Types/AllTypes'
const initialState = {
    PricePerVar: null,
};
const PricePer = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case TOKENPRICEPERCENT:
            return {
                ...state,
                PricePerVar: payload
            }
        case RESETSTATE:
            return {
                ...state,
                PricePerVar: null,
            }
        default:
            return state;
    }
}

export { PricePer }
