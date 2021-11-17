import { WTSxUSERADDRESS, RESETSTATE } from '../Types/AllTypes'
const initialState = {
    WalletTransObj: null,
    walletbalance: null,
};
const WTXUSERObj = (state = initialState, action) => {
    const { walletTrOBJ,TransObj, walletBALANCE, type } = action;

    switch (type) {
        case WTSxUSERADDRESS:
            return {
                ...state,
                WalletTransObj: walletTrOBJ,
                walletbalance: walletBALANCE,
            }
        case RESETSTATE:
            return {
                ...state,
                WalletTransObj: null,
                walletbalance:null
            }
        default:
            return state;
    }
}

export { WTXUSERObj }
