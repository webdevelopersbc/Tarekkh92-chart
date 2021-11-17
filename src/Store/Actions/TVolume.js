import { TOKENVOLUME } from '../Types/AllTypes'
import { Volume } from "../../Data/Get24HourVolume";
import { getPair } from "../../Data/GetPair";
export const GetTokenVolume = (_address) => async (dispatch) => {
    try {
        const bnbAddress = "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c";
        let bnbPairArray = await getPair(_address, bnbAddress);
        let BnbV2 = bnbPairArray[1]
        let volume = await Volume(BnbV2);
        console.log(volume, `action volume`);
        dispatch({
            type: TOKENVOLUME,
            payload: volume
        });
    } catch (error) {
        console.log(`error --> ${error}`);
    }

};









// import { TOKENVOLUME } from '../Types/AllTypes'
// import { Volume } from "../../Data/Get24HourVolume";
// import { getPair } from "../../Data/GetPair";
// export const GetTokenVolume = (_address) => async (dispatch) => {
//     try {
//         const bnbAddress = "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c";
//         let bnbPair = await getPair(_address, bnbAddress);
//         let volume = await Volume(bnbPair);
//         console.log(volume, `action volume`);
//         dispatch({
//             type: TOKENVOLUME,
//             payload: volume
//         });
//     } catch (error) {
//         console.log(`error --> ${error}`);
//     }

// };
