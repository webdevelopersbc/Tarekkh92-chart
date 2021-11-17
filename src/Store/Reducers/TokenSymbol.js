import { TOKENSYMBOLDISPLAY,RESETSTATE } from '../Types/AllTypes'
const initialState = {
    TSymbol: null,
};
const TokenSymbol = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case TOKENSYMBOLDISPLAY:
            return {
                ...state,
                TSymbol: payload
            }
        case RESETSTATE:
            return {
                ...state,
                TSymbol: null,
            }
        default:
            return state;
    }
}

export { TokenSymbol }
