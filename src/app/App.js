import React, { Component, useEffect, useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import './App.scss';
import AppRoutes from './AppRoutes';
import Navbar from './shared/Navbar';
import Sidebar from './shared/Sidebar';
import Footer from './shared/Footer';
import { withTranslation } from "react-i18next";
import { globalContext } from './../Context/GlobalState'

import { ethers } from "ethers";
import { connect } from 'react-redux'
import { GetPriceVar } from '../Store/Actions/Price'
import { GetTokenNameVar } from '../Store/Actions/Name'
import { GetTokenSymbol } from '../Store/Actions/TokenSymbol'
import { GetPricePer } from '../Store/Actions/TPPercent'
import { GetPRICEARROWCOMP } from '../Store/Actions/ArrowGOR'
import { GetMARKETCAPVar } from '../Store/Actions/MarketCap'
import { GetTokenLogo } from '../Store/Actions/TLogo'
import { GetTokenVolume } from '../Store/Actions/TVolume'
import { GetTokenLiquidity } from '../Store/Actions/TLiquidity'
import { GetCirculatingSupply } from '../Store/Actions/Circusupply'
import { GetTotalSupply } from '../Store/Actions/TotalSupply'
import { GetTransactions } from '../Store/Actions/Transactions'
import { GetTableObj } from '../Store/Actions/TableTrans'
//import { GetWallePrice } from '../Store/Actions/WalletPrice'
const App = (props) => {
  const [isFullPageLayout, setisFullPageLayout] = useState(null);
  const { tokenAddress, userAddress, setTokenAddress, isDark, setIsDark, isToggleShow, GO } = useContext(globalContext)
  // const [logoLink, setLogoLink] = useState(null);
  useEffect(() => {
    onRouteChanged();
  }, [props.location])
  useEffect(() => {
    setTokenAddress(GO)
    props.GetPriceVar(GO)
    props.GetTokenNameVar(GO)
    props.GetTokenSymbol(GO)
    props.GetPricePer(GO)
    props.GetPRICEARROWCOMP(GO)
    props.GetMARKETCAPVar(GO)
    props.GetTokenLogo(GO)
    props.GetTokenVolume(GO)
    props.GetTokenLiquidity(GO)
    props.GetCirculatingSupply(GO)
    props.GetTotalSupply(GO)
    props.GetTransactions(GO)
    // let ucre = { tokenAddress: tokenAddress }
    props.GetTableObj(GO)

    //props.GetWallePrice(GO)
    // runMain(0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c)

  }, [GO])
  const handleLight = (e) => {
    setIsDark(true)
  }
  const handleDark = (e) => {
    setIsDark(false)
  }
  let navbarComponent = !isFullPageLayout ? <Navbar /> : '';
  let sidebarComponent = !isFullPageLayout ? <Sidebar isDark={isDark} handleDark={handleDark} handleLight={handleLight} isToggleShow={isToggleShow} /> : '';
  let footerComponent = !isFullPageLayout ? <Footer /> : '';
  const onRouteChanged = () => {
    console.log("ROUTE CHANGED");
    const { i18n } = props;
    const body = document.querySelector('body');
    if (props.location.pathname === '/layout/RtlLayout') {
      body.classList.add('rtl');
      i18n.changeLanguage('ar');
    }
    else {
      body.classList.remove('rtl')
      i18n.changeLanguage('en');
    }
    window.scrollTo(0, 0);
    const fullPageLayoutRoutes = ['/user-pages/login-1', '/user-pages/login-2', '/user-pages/register-1', '/user-pages/register-2', '/user-pages/lockscreen', '/error-pages/error-404', '/error-pages/error-500', '/general-pages/landing-page'];
    for (let i = 0; i < fullPageLayoutRoutes.length; i++) {
      if (props.location.pathname === fullPageLayoutRoutes[i]) {
        setisFullPageLayout(true)
        document.querySelector('.page-body-wrapper').classList.add('full-page-wrapper');
        break;
      } else {
        setisFullPageLayout(false)
        document.querySelector('.page-body-wrapper').classList.remove('full-page-wrapper');
      }
    }
  }

  return (
    <div className="container-scroller">
      {sidebarComponent}
      <div className="container-fluid page-body-wrapper">
        {navbarComponent}
        <div className="main-panel">
          <div className={isDark ? `content-wrapper bg-light ` : `content-wrapper bg-dark`}>
            <AppRoutes />
          </div>
          {footerComponent}
        </div>
      </div>
    </div>
  );
}
// class App extends Component {
//   state = {}

//   componentDidMount() {
//     this.onRouteChanged();
//   }
//   render () {
//     let navbarComponent = !this.state.isFullPageLayout ? <Navbar/> : '';
//     let sidebarComponent = !this.state.isFullPageLayout ? <Sidebar/> : '';
//     let footerComponent = !this.state.isFullPageLayout ? <Footer/> : '';
//     return (
//       <div className="container-scroller">
//         { sidebarComponent }
//         <div className="container-fluid page-body-wrapper">
//           { navbarComponent }
//           <div className="main-panel">
//             <div className="content-wrapper">
//               <AppRoutes/>
//             </div>
//             { footerComponent }
//           </div>
//         </div>
//       </div>
//     );
//   }

//   componentDidUpdate(prevProps) {
//     console.log(prevProps,'prevProps')
//     if (this.props.location !== prevProps.location) {
//       this.onRouteChanged();
//     }
//   }

//   onRouteChanged() {
//     console.log("ROUTE CHANGED");
//     const { i18n } = this.props;
//     const body = document.querySelector('body');
//     if(this.props.location.pathname === '/layout/RtlLayout') {
//       body.classList.add('rtl');
//       i18n.changeLanguage('ar');
//     }
//     else {
//       body.classList.remove('rtl')
//       i18n.changeLanguage('en');
//     }
//     window.scrollTo(0, 0);
//     const fullPageLayoutRoutes = ['/user-pages/login-1', '/user-pages/login-2', '/user-pages/register-1', '/user-pages/register-2', '/user-pages/lockscreen', '/error-pages/error-404', '/error-pages/error-500', '/general-pages/landing-page'];
//     for ( let i = 0; i < fullPageLayoutRoutes.length; i++ ) {
//       if (this.props.location.pathname === fullPageLayoutRoutes[i]) {
//         this.setState({
//           isFullPageLayout: true
//         })
//         document.querySelector('.page-body-wrapper').classList.add('full-page-wrapper');
//         break;
//       } else {
//         this.setState({
//           isFullPageLayout: false
//         })
//         document.querySelector('.page-body-wrapper').classList.remove('full-page-wrapper');
//       }
//     }
//   }

// }

export default connect(null, { GetPriceVar, GetTableObj, GetTransactions, GetTokenNameVar, GetTotalSupply, GetTokenSymbol, GetPricePer, GetCirculatingSupply, GetPRICEARROWCOMP, GetMARKETCAPVar, GetTokenLogo, GetTokenVolume, GetTokenLiquidity })(withTranslation()(withRouter(App)));
