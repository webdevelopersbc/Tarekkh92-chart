import { TOKENLIQUIDITY,RESETSTATE } from '../Types/AllTypes'
const initialState = {
    TokenLiquidity: null,
};
const TLiquidity = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case TOKENLIQUIDITY:
            return {
                ...state,
                TokenLiquidity: payload
            }
        case RESETSTATE:
            return {
                ...state,
                TokenLiquidity: null,
            }
        default:
            return state;
    }
}

export { TLiquidity }
