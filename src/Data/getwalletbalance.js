import { ethers } from "ethers";
export const getWalletBalance = async (userAddress, tokenAddress) => {
    try {
        const tokenAbi = [
            "function balanceOf(address owner) view returns (uint256)",
            "function decimals() public view virtual override returns (uint8)",
            "function name() public view returns (string)",
            "function symbol() public view returns (string)",
            "event Transfer(address indexed from, address indexed to, uint amount)",
            "function totalSupply() external view returns (uint256)",
        ];

        const provider = new ethers.providers.JsonRpcProvider(
            "https://bsc-dataseed.binance.org/"
        );

        const tokenContract = new ethers.Contract(tokenAddress, tokenAbi, provider);

        let bal = await tokenContract.balanceOf(userAddress)
        let decimals = await tokenContract.decimals()
        let balFormat = (bal.toString() / 10 ** decimals).toPrecision(6);
        return balFormat;
    } catch (error) {
        console.log(`error-->`, error);
    }

}