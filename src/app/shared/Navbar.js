import React, { Component, useContext, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';
import Switch from "react-switch";
import { Button, Modal } from 'react-bootstrap';
import cogoToast from 'cogo-toast';
import metamask from "../../assets/images/meta.png"
import walletConnect from "../../assets/images/Connect.png"
import {
  globalContext, Connect
} from './../../Context/GlobalState'
import { connect } from 'react-redux'
import './Navbar.css'
import { ResetState } from '../../Store/Actions/ResetState'
import { GetWalletTransUA } from '../../Store/Actions/WTSxUserAd'

const Navbar = ({ ResetState, GetWalletTransUA }) => {
  const { tokenAddress, userAddress, setUserAddress, userAddressGO, setUserAddressGO, setTokenAddress,GO, setGO, runMain, setTokenPrice,
    setMarketCap, setTokenName, settransdata, isDark, setIsDark, setCirsupply, setVolume, setTokenLogo, setTokenSymbol, setLiquidityval, settransdata1, settotalSupply, setisToggleShow } = useContext(globalContext)
  let [ShowPopup, setShowPopup] = useState(false)
  const toggleOffcanvas = () => {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
    // setisToggleShow(e=> !e)
  }
  const toggleRightSidebar = () => {
    document.querySelector('.right-sidebar').classList.toggle('open');
  }
  const handleToggleShow = () => {
    document.body.classList.toggle('sidebar-icon-only')
    setisToggleShow(e => !e)
  }
  // const handleChange = (e) => {
  //   setTokenAddress(e.target.value)

  // }
  // const handleToggle = (e) => {
  //   setIsDark(e => !e)
  // }
  // const handleClick = () => {
  //   setTokenPrice(null)
  //   settransdata([])
  //   settransdata1([])
  //   runMain(tokenAddress);
  // }
  const handleConnect = (e) => {
    e.preventDefault()
    Connect()
  }
  const handleAddress = (e) => {
    e.preventDefault()
    setShowPopup(true)
  }
  const handleChange = (e) => {
    setUserAddress(e.target.value)
    // setTokenAddress(GO)
    // setUserAddressGO(userAddress)

  }
  const handleClick = () => {
    // setTokenPrice(null)
    // settransdata([])
    // settransdata1([])
    // ResetState()
    let toastoptions = {
      hideAfter: 5,
      position: 'top-right',
      heading: 'Attention'
    }
    // if (userAddress.length < 42 || userAddress.length > 42) {
    //   console.log("not the correct length");
    //   cogoToast.error('not the correct length', toastoptions)
    //   return;
    // } else
     if (userAddress.substring(0, 2) != "0x") {
      console.log("token addresses start with 0x");
      cogoToast.error('token addresses start with 0x', toastoptions)
      return;
    } else {
      ///test token 0xc748673057861a797275CD8A068AbB95A902e8de
      ///test user 0x8c128dba2cb66399341aa877315be1054be75da8
      // userAddress
      console.log(`tokenAddress-->`, tokenAddress, `-->userAddress`, userAddress);
      let ucre = { tokenAddress: tokenAddress, userAddress: userAddress }
      GetWalletTransUA(ucre)
      // setGO(tokenAddress)
      setShowPopup(false)
    }
  }
  return (
    <nav className={isDark ? `bg-light text-light navbar p-0 fixed-top d-flex flex-row` : `bg-dark text-dark navbar p-0 fixed-top d-flex flex-row`}>

      <div className="navbar-brand-wrapper d-flex d-lg-none  align-items-center justify-content-center" >

        <Link className="navbar-brand brand-logo-mini" to="/"><img src={require('../../assets/images/logo-mini.svg')} alt="logo" /></Link>
      </div>

      <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">

        <button className="navbar-toggler align-self-center" type="button" onClick={handleToggleShow}>
          <span className="mdi mdi-menu"></span>
        </button>
        {/* <div className='mt-1 d_S ml-2 mt-3 w-100' >
          <div className='w-100 d-flex align-items-center justify-content-around'>
            <input type="text" value={tokenAddress} onChange={handleChange} className={isDark ? `form-control bg-light text-dark` : `form-control bg-dark text-light `} placeholder="Enter Address" />
            <Switch onChange={handleToggle} checked={isDark} />
          </div>
        </div> */}
        <ul className="navbar-nav w-100">
          <li className="nav-item w-100">
            <form className="nav-link mt-2 mt-md-0 d-none d-lg-flex search">
              <div className='row'>
              </div>
              {/* <input style={{ width: '40%' }} type="text" value={tokenAddress} onChange={handleChange} className={isDark ? `form-control bg-light text-dark` : `form-control bg-dark text-light `} placeholder="Enter Address" />
              <button type="button" onClick={handleClick} class="btn btn-success" style={{ width: '123px' }}>Go</button> */}
              <div>
                {/* <div className='mt-1 ml-2' >
                  <span className='mb-2'><i style={{ fontSize: '30px', position: 'relative', top: '-2px', color: isDark ? '#000' : '#fff' }} className="fa fa-moon-o"></i></span>  <Switch onChange={handleToggle} checked={isDark} /><span className='ml-1'><i style={{ fontSize: '28px', position: 'relative', top: '-3px', color: isDark ? '#000' : '#fff' }} className="fa fa-sun-o"></i></span>

                  <Switch onChange={handleToggle} checked={isDark} />
                </div> */}
              </div>
            </form>
          </li>
        </ul>
        <ul className="navbar-nav navbar-nav-right">
          <Dropdown alignRight as="li" className="nav-item d-none d-lg-block">
            <Dropdown.Toggle className="nav-link btn btn-success create-new-button no-caret">
              + <Trans>Connect</Trans>
            </Dropdown.Toggle>
            <Dropdown.Menu className="navbar-dropdown preview-list navbar-profile-dropdown-menu">
              <Dropdown.Item onClick={handleConnect} className="preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-dark rounded-circle">
                    <img src={metamask} alt="Logo" />
                  </div>
                </div>
                <div className="preview-item-content">
                  <p className="preview-subject mb-1"><Trans >MetaMask</Trans></p>
                </div>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Modal

                show={ShowPopup}
                onHide={() => setShowPopup(false)}
                aria-labelledby="example-modal-sizes-title-md"
              >
                {/* <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                  </Modal.Header> */}

                <Modal.Body className={isDark ? 'modelBodyadark' : 'modelBodyLight'} >
                  <input type="text" value={userAddress} onChange={handleChange} className={isDark ? `form-control  bg-light text-dark` : `form-control bg-dark text-light `} placeholder="Enter Address" />
                  {/* <button type="button" onClick={handleClick} class="btn btn-success" style={{ width: '123px' }}>Go</button> */}
                </Modal.Body>

                <Modal.Footer className={isDark ? 'fleex-wrap modelBodyadark' : 'fleex-wrap modelBodyLight'}>
                  <Button variant="success m-2" onClick={handleClick}>Submit</Button>
                  <Button variant="light m-2" onClick={() => setShowPopup(false)}>Cancel</Button>
                </Modal.Footer>
              </Modal>
              <Dropdown.Item onClick={handleAddress} className="preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-dark rounded-circle">
                    {/* <img src={walletConnect} alt="Logo" /> */}
                    <i className="fa fa-search"></i>
                  </div>
                </div>
                <div className="preview-item-content">

                  <p className="preview-subject mb-1"><Trans >Enter Address</Trans></p>

                </div>
              </Dropdown.Item>
              {/* <Dropdown.Divider />
              <p className="p-3 mb-0 text-center"><Trans>Advanced settings</Trans></p> */}
            </Dropdown.Menu>
          </Dropdown>
        </ul>
        <Dropdown alignRight as="li" className="nav-item d_S1 d-lg-block">
          <Dropdown.Toggle className="nav-link btn btn-success create-new-button no-caret">
            + <Trans>Connect</Trans>
          </Dropdown.Toggle>
          <Dropdown.Menu className="navbar-dropdown preview-list navbar-profile-dropdown-menu">
            <h6 className="p-3 mb-0"><Trans>Profile</Trans></h6>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleConnect} className="preview-item">
              <div className="preview-thumbnail">
                <div className="preview-icon bg-dark rounded-circle">
                  <img src={metamask} alt="Logo" />
                </div>
              </div>
              <div className="preview-item-content">
                <p className="preview-subject mb-1"><Trans>MetaMask</Trans></p>
              </div>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="!#" onClick={handleAddress} className="preview-item">
              <div className="preview-thumbnail">
                <div className="preview-icon bg-dark rounded-circle">
                  <i className="fa fa-search"></i>
                </div>
              </div>
              <div className="preview-item-content">
                <p className="preview-subject mb-1"><Trans >Enter Address</Trans></p>
              </div>
            </Dropdown.Item>
            {/* <Dropdown.Divider />
              <p className="p-3 mb-0 text-center"><Trans>Advanced settings</Trans></p> */}
          </Dropdown.Menu>
        </Dropdown>
        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={toggleOffcanvas}>
          <span className="mdi mdi-format-line-spacing"></span>
        </button>

      </div>

    </nav>
  );
}


export default connect(null, { ResetState, GetWalletTransUA })(Navbar);
