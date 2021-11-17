import { CIRCULATINGSUPPLY, RESETSTATE } from '../Types/AllTypes'
const initialState = {
    Csupply: null,
};
const CirSupply = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case CIRCULATINGSUPPLY:
            return {
                ...state,
                Csupply: payload
            }
        case RESETSTATE:
            return {
                ...state,
                Csupply: null,
            }
        default:
            return state;
    }
}

export { CirSupply }
