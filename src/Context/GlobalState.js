import React, { createContext, useState } from 'react'

// import { getLiquidity } from "../Data/TransactionData";
import { ethers } from "ethers";
export const globalContext = createContext();


// api key: 7UG6HX1VNW76Z8FK2A9B5FTHU9QCQM9W68
//Documentation for Template: https://www.bootstrapdash.com/product/corona-react/

export const Connect = async (e) => {
    console.log("connected")

    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    // Prompt user for account connections
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    console.log("Account:", await signer.getAddress());
}




export const GlobalProvider = ({ children }) => {
    const [tokenAddress, setTokenAddress] = useState('0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3');
    const [GO, setGO] = useState('0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3');
    const [userAddress, setUserAddress] = useState('');
    const [userAddressGO, setUserAddressGO] = useState('');
    const [SellBuytransKey, setsetSellBuytransKey] = useState('All')
    const [isDark, setIsDark] = useState(false)
    const [TokenSearch, setTokenSearch] = useState('')
    const [Token, setToken] = useState(false)
    let [isToggleShow, setisToggleShow] = useState(false)
    const handleTransDiffer = (evt) => {
        try {
            setsetSellBuytransKey(evt)
        } catch (error) {
            console.log(` error--->${error}`);
        }
    }
    console.log(tokenAddress,'tokenAddress');
    return <globalContext.Provider
        value={{
            tokenAddress,
            setTokenAddress,
            isDark,
            setIsDark,
            setisToggleShow,
            isToggleShow,
            setGO,
            GO,
            handleTransDiffer,
            SellBuytransKey,
            setTokenSearch,
            TokenSearch,
            setUserAddress,
            userAddress,
            userAddressGO,
            setUserAddressGO,

        }}
    >
        {children}
    </globalContext.Provider>
}