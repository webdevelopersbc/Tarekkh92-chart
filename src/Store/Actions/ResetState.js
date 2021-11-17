import { RESETSTATE } from '../Types/AllTypes'
export const ResetState = () => async (dispatch) => {
    try {
        dispatch({
            type: RESETSTATE,
        });
    } catch (error) {
        console.log(`error --> ${error}`);
    }

};
