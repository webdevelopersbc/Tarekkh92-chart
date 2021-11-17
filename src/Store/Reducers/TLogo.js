import { TOKENLOGO, RESETSTATE } from '../Types/AllTypes'
const initialState = {
    TokenLogo: null,
};
const TLogo = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case TOKENLOGO:
            return {
                ...state,
                TokenLogo: payload
            }
        case RESETSTATE:
            return {
                ...state,
                TokenLogo: null,
            }
        default:
            return state;
    }
}

export { TLogo }
