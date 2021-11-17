import { combineReducers } from "redux";
import { Price } from "./Price";
import { Name } from "./Name";
import { TokenSymbol } from "./TokenSymbol";
import { PricePer } from "./TPPercent";
import { PRICEARROW } from "./ArrowGOR";
import { MARKETcap } from "./MarketCap";
import { TLogo } from "./TLogo";
import { TVolume } from "./TVolume";
import { TLiquidity } from "./TLiquidity";
import { CirSupply } from "./Circusupply";
import { TSupply } from "./TotalSupply";
import { TransactionsData } from "./Transactions";
import { WTransObj } from "./WalletTrans";
import {WALLETPRICE } from "./WalletPrice";
import {WTXUSERObj } from "./WTxUserAd";
const RootReducer = combineReducers({
    Price,
    Name,
    TokenSymbol,
    PricePer,
    PRICEARROW,
    MARKETcap,
    TLogo,
    TVolume,
    TLiquidity,
    CirSupply,
    TSupply,
    TransactionsData,
    WTransObj,
    WALLETPRICE,
    WTXUSERObj
});


export default RootReducer;
