export const getWalletBalanceUSD = async (WalletBal, tokenPrice) => {
    try {
        let balUsd = WalletBal * tokenPrice
        console.log(balUsd, 'balUsd')

        return balUsd
    } catch (error) {
        console.log(`error-->`, error);
    }


}