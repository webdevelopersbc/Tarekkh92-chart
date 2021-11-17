import { TOKENLOGO } from '../Types/AllTypes'
import { LogoSrc } from "../../Data/TrustWallet";
export const GetTokenLogo = (_address) => async (dispatch) => {
    try {
        let tLogo = LogoSrc(_address)
        console.log(tLogo, `action tLogo`);
        dispatch({
            type: TOKENLOGO,
            payload: tLogo
        });
    } catch (error) {
        console.log(`error --> ${error}`);
    }

};
