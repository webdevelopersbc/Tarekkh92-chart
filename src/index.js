import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./app/App";
import "./i18n";
import * as serviceWorker from "./serviceWorker";
import { GlobalProvider } from "./Context/GlobalState";
import { Decimals } from "./Data/MarketCap";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./Store/store";
ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </Provider>
  </HashRouter>,

  document.getElementById("root")
);
const axios = require("axios");

const getBNBPrice = async (tokenAddress) => {
  try {
    const result = await axios.post("https://graphql.bitquery.io", {
      query: `    
query ($address: String!) {
  ethereum(network: bsc) {
    dexTrades(
      options: {desc: ["block.height", "tradeIndex"], limit: 1}
      exchangeName: {in: ["Pancake", "Pancake v2"]}
      quoteCurrency: {is: "0xe9e7cea3dedca5984780bafc599bd69add087d56"}
      date: {after: "2021-07-28"}
      baseCurrency: {is: $address}
    ) {
      tradeIndex
      block {
        height
      }
      quotePrice
    }
    address(address: {is: $address}) {
      smartContract {
        currency {
          symbol
          name
          decimals
        }
      }
    }
  }
}


      `,
      variables: {
        address: tokenAddress,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    const price = Number(result.data.data.ethereum.dexTrades[0].quotePrice);
    const priceNum = price;

    return priceNum;

    // console.log(name);
    // console.log(symbol);
  } catch (error) {
    console.error(error);
  }
};

export default getBNBPrice;
// serviceWorker.unregister();
reportWebVitals();
