import { TOTALSUPPLY,RESETSTATE } from '../Types/AllTypes'
const initialState = {
    Totalsupply: null,
};
const TSupply = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case TOTALSUPPLY:
            return {
                ...state,
                Totalsupply: payload
            }
        case RESETSTATE:
            return {
                ...state,
                Totalsupply: null,
            }
        default:
            return state;
    }
}

export { TSupply }
