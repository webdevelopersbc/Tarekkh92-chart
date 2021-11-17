import { WALLET_PRICE, RESETSTATE } from '../Types/AllTypes'
const initialState = {
    walletbalance: null
};
const WALLETPRICE = (state = initialState, action) => {
    const { walletBLC, type } = action;

    switch (type) {
        case WALLET_PRICE:
            return {
                ...state,
                walletbalance: walletBLC
            }
        case RESETSTATE:
            return {
                ...state,
                walletbalance: null
            }
        default:
            return state;
    }
}

export { WALLETPRICE }
