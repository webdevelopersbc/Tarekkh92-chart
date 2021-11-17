import { TABLE_TRANS_OBJECT, RESETSTATE } from '../Types/AllTypes'
const initialState = {
    // WalletTransObj: null,
    // walletbalance: null,
    TransactionOBJ:null
};
const WTransObj = (state = initialState, action) => {
    const { WTO,TransObj, walletBLC, type } = action;

    switch (type) {
        case TABLE_TRANS_OBJECT:
            return {
                ...state,
                // WalletTransObj: WTO,
                // walletbalance: walletBLC,
                TransactionOBJ:TransObj
            }
        // case RESETSTATE:
        //     return {
        //         ...state,
        //         // WalletTransObj: null,
        //         TransactionOBJ40:null
        //     }
        default:
            return state;
    }
}

export { WTransObj }
