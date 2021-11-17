import { NAMEDISPLAY,RESETSTATE } from '../Types/AllTypes'
const initialState = {
    NameVar: null,
};
const Name = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case NAMEDISPLAY:
            return {
                ...state,
                NameVar: payload
            }
        case RESETSTATE:
            return {
                ...state,
                NameVar: null,
            }
        default:
            return state;
    }
}

export { Name }
