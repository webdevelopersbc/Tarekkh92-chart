

//will be very small number but needs to limit how man characters it has but it these variables will always change so I need to always round to 6 nearest 
let tokenAddress = "0x4329f1fbb62dea8960237fd975a794a604c57ff7"

//will be around $22 and should display with as $22.26
let tokenAddress = "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"


const GetPrice = async(tokenAddress) => {

    // need to do try and catch statement later
    let url = ("https://api.pancakeswap.info/api/v2/tokens/" + tokenAddress);
    
    const response = await fetch(url);
    const tokenInfo = await response.json();
    let price = tokenInfo.data.price
    return parseFloat(price)

    }
    

    console.log(GetPrice)

    