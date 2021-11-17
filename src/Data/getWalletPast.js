
let bscscanApi = "7UG6HX1VNW76Z8FK2A9B5FTHU9QCQM9W68"
export const getWalletPast = async (tokenAddress, userAddress) => {



    //
    try {
        console.log(tokenAddress,userAddress,'userAddress')
        let url = ("https://api.bscscan.com/api?module=account&action=tokentx&contractaddress=" + tokenAddress + "&address=" + userAddress + "&page=1&offset=100&sort=asc&apikey=" + bscscanApi);
        console.log(url);
        const response = await fetch(url);
        const trans = await response.json();
        console.log(trans,'trans')
        return trans
        //   let price = tokenInfo.data.price
        //   let floatPrice = parseFloat(price);
        // console.log(floatPrice)
        //   return floatPrice
    } catch (error) {
        console.log(`error --> ${error}`);
    }
};