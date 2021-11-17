export const GetPrice = async (tokenAddress) => {
    try {
        let url = ("https://api.pancakeswap.info/api/v2/tokens/" + tokenAddress);

        const response = await fetch(url);
        const tokenInfo = await response.json();
        let price = tokenInfo.data.price
        let floatPrice = parseFloat(price);
        // console.log(floatPrice)
        return floatPrice
    } catch (error) {
        console.log(`error --> ${error}`);
    }

}