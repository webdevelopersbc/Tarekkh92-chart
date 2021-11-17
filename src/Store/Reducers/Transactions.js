import { TRANSACTION,RESETSTATE } from '../Types/AllTypes'
const initialState = {
    Transactions: [],
    FinalTransactions: []
};
const TransactionsData = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case TRANSACTION:
            const sorttransaction = sortBy => (a, b) => {
                if (a[sortBy].toLowerCase() > b[sortBy].toLowerCase()) {
                    return -1;
                } else if (a[sortBy].toLowerCase() < b[sortBy].toLowerCase()) {
                    return 1;
                }
                return 0;
            }
            const sortedTransactions = state.Transactions && state.Transactions.sort(sorttransaction('Timestamp'));
            let FTransaction = []
            sortedTransactions && sortedTransactions.forEach(trans => {
                if (FTransaction.length === 41) {
                    FTransaction.pop()
                }
                FTransaction.push(trans)
            })
            // console.log(sortedTransactions,'sortedTransactions');
            return {
                Transactions: [payload, ...state.Transactions],
                FinalTransactions: FTransaction
            }
        case RESETSTATE:
            return {
                ...state,
                // Transactions: [],
                FinalTransactions:[]
            }
        default:
            return state;
    }
}

export { TransactionsData }
