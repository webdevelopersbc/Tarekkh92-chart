import { TOKENVOLUME, RESETSTATE } from '../Types/AllTypes'
const initialState = {
    TokenVolume: null,
};
const TVolume = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case TOKENVOLUME:
            return {
                ...state,
                TokenVolume: payload
            }
        case RESETSTATE:
            return {
                ...state,
                TokenVolume: null
            }
        default:
            return state;
    }
}

export { TVolume }
