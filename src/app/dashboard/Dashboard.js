import React, { useContext, useState } from 'react';
import { globalContext } from '../../Context/GlobalState'
import './dasboardStyle.css'
import Spinner from './../shared/Spinner'
import cogoToast from 'cogo-toast';
import { Select } from 'antd';
import 'antd/dist/antd.css';
import { searchTokens } from '../../graphql'
import { Col, Row, Nav, Tabs, Tab } from 'react-bootstrap';
import { TVChartContainer } from '../../Component/TVChartContainer/index'
import { ResetState } from '../../Store/Actions/ResetState'
import { connect } from 'react-redux'
export const Dashboard = ({ PriceVar, NameVar, TransactionOBJ, WalletUSERTransObj, TSymbol, walletbalance, PricePerVar, PriceArrow, MarketCapVar, TokenLogo, TokenVolume, TokenLiquidity, Csupply, Totalsupply, Transactions, FinalTransactions, ResetState }) => {
  const { SellBuytransKey, handleTransDiffer, tokenAddress, TokenSearch,
    isDark, setTokenAddress, runMain, setGO, setTokenSearch, GO, } = useContext(globalContext)
  const { Option } = Select;
  const [Tokens, setTokens] = useState([])
  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'K' : Math.sign(num) * Math.abs(num)
  }
  function mFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000000).toFixed(1)) + 'M' : Math.sign(num) * Math.abs(num)
  }
  function bFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000000000).toFixed(1)) + 'B' : Math.sign(num) * Math.abs(num)
  }
  function tFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000000000000).toFixed(1)) + 'T' : Math.sign(num) * Math.abs(num)
  }
  function qFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000000000000000).toFixed(1)) + 'Q' : Math.sign(num) * Math.abs(num)
  }

  const formatNumber = (num) => {
    if (!num) num = 0
    if (num <= 999999) {
      return kFormatter(num)
    } else if (num >= 1000000 && num <= 999999999) {
      return mFormatter(num)
    } else if (num >= 1000000000 && num <= 999999999999) {
      return bFormatter(num)
    } else if (num >= 1000000000000 && num <= 999999999999999) {
      return tFormatter(num)
    } else {
      return qFormatter(num)
    }
  }



  function onBlur() {
    console.log('blur');
  }

  function onFocus() {
    console.log('focus');
  }

  async function onSearch(e) {
    setTokenAddress(e)
    setGO(tokenAddress)
    console.log(e, 'e');
    let a = await searchTokens(e)
    setTokens(a)

  }
  let nf = Intl.NumberFormat();
  console.log(nf.format(Totalsupply), `--->numb1`);
  const handleClick = () => {
    // setTokenPrice(null)
    // settransdata([])
    // settransdata1([])
    ResetState()
    let toastoptions = {
      hideAfter: 5,
      position: 'top-right',
      heading: 'Attention'
    }
    if (tokenAddress.length < 42 || tokenAddress.length > 42) {
      console.log("not the correct length");
      cogoToast.error('not the correct length', toastoptions)
      return;
    } else if (tokenAddress.substring(0, 2) != "0x") {
      console.log("token addresses start with 0x");
      cogoToast.error('token addresses start with 0x', toastoptions)
      return;
    } else {
      setGO(tokenAddress)
    }


  }
  // console.log(`-->tadress`, tokenAddress);
  const handleChange = (e) => {
    setTokenAddress(e.target.value)
    // setGO(tokenAddress)

  }

  const handleChangeDrop = async (e) => {
    console.log(e, `event`);
    setTokenSearch(e)
    setTokenAddress(e)
    setGO(tokenAddress)
    // let a = await searchTokens(e)
    // setTokens(a)
  }
  // console.log(Tokens, 'tokenstate');
  ////////////////////////  differenciate Transaction//
  // let finalSellBuyArray = FinalTransactions && FinalTransactions.filter(item => {
  let SellBuyArray;
  
  if (FinalTransactions && FinalTransactions.length > 0 && TransactionOBJ && TransactionOBJ.length > 0) {
    console.log(typeof(TransactionOBJ))
    SellBuyArray = [...FinalTransactions, ...TransactionOBJ]
  } 
  let finalSellBuyArray = SellBuyArray && SellBuyArray.filter(item => {
    return item.buySell === SellBuytransKey || item.All === SellBuytransKey
  })
  // let finalSellBuyArray;
  // console.log(TransactionOBJ,'TransactionOBJ dashbaor');
  // console.log(finalSellBuyArray,'TransactionOBJ finalSellBuyArray');
  // if (TransactionOBJ && TransactionOBJ.length > 0) {
  //   finalSellBuyArray = [...finalSellBuy, ...TransactionOBJ40]
  // }
  return <div>
    <div className="row">
      <div className="col-12 grid-margin stretch-card">
        <Select
          showSearch
          style={{ width: 400 }}
          placeholder="Select a Token / Address"
          // optionFilterProp="children"
          onChange={handleChangeDrop}
          // onFocus={onFocus}
          // onBlur={onBlur}
          onSearch={onSearch}
        // filterOption={(input, option) =>
        //   option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        // }
        >
          {Tokens && Tokens.map((token, i) => {
            return <Option key={token.id} value={token.id}><img style={{ width: '20px' }} src={'data:image/jpeg;base64,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'} alt="logo" /><span>{token.name} <br /> {token.id}</span> </Option>
          })}
        </Select>
        {/* <input type="text" value={tokenAddress} onChange={handleChange} className={isDark ? `form-control inpStyle bg-light text-dark` : `form-control bg-dark inpStyle text-light `} placeholder="Enter Address" /> */}
        <button type="button" onClick={handleClick} className="btn btn-success" style={{ width: '123px' }}>Go</button>
        {/* <div className="card corona-gradient-card">
          <div className="card-body py-0 px-0 px-sm-3">
            <div className="row align-items-center">
              <div className="col-4 col-sm-3 col-xl-2">
                <img src={require('../../assets/images/dashboard/Group126@2x.png')} className="gradient-corona-img img-fluid" alt="banner" />
              </div>
              <div className="col-5 col-sm-7 col-xl-8 p-0">
                <h4 className="mb-1 mb-sm-0">All Tech No Talk</h4>
                <p className="mb-0 font-weight-normal d-none d-sm-block">The user experience is our main focus.</p>
              </div>
              <div className="col-3 col-sm-2 col-xl-2 pl-0 text-center">
                <button className="btn btn-outline-light btn-rounded get-started-btn">About Us</button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
    <div className="row">

      {/* <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
        <div className={isDark ? `card bg-light text-dark ` : `card text-light`}>
          <div className="card-body pad">
            <div className="row align-items-center">
              <div className='col-6 '>
                {tokenLogo ? <img style={{ width: '35px', height: '35px', borderRadius: '17px' }} src={tokenLogo} alt="tokenLogo" /> : <p className="mb-0 text-muted font-weight-normal">Logo</p>}
              </div>
              <div className='col-6 mt-2' >
                <div className='col-12'><p className='mb-2 fontTN'>{tokenName ? tokenName : 'Name'} ({TokenSymbol ? TokenSymbol : 'Symbol'})</p></div>
                <div className='col-12'><h6 className='mb-2 mt-1 text-muted font-weight-normal'>{'Name'}</h6></div>
              </div>
              

            </div>

          </div>
        </div>
      </div> */}

      <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
        <div className="card" style={{ background: isDark ? '#ffff' : '#191c24', color: isDark ? '#0d0d0d !important' : '#ffff !important' }}>
          <div className="card-body">
            <div className="row">
              <div className="col-9">
                <div className="d-flex align-items-center align-self-start">
                  <h3 className="mb-1" style={{ fontSize: NameVar && NameVar.length > 12 ? '1rem' : '1.5rem', color: isDark ? '#191c24' : '#ffff' }} >{NameVar ? NameVar : '...'} {TSymbol ? `(${TSymbol})` : ''}</h3>
                  {/* <p className="text-success ml-2 mb-0 font-weight-medium">+3.5%</p> */}
                </div>
              </div>
              <div className="col-3">
                <div className="icon icon-box-success bg-transparent ">
                  {TokenLogo ? <img style={{ width: '35px', height: '35px', borderRadius: '17px' }} src={TokenLogo} alt="tokenLogo" /> : <p className="mb-0 text-muted font-weight-normal">...</p>}

                  {/* <span className="mdi mdi-arrow-top-right icon-item"></span> */}
                </div>
              </div>
            </div>
            <h6 className="text-muted font-weight-normal">Name(Symbol)</h6>
          </div>
        </div>
      </div>



      <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
        <div className="card" style={{ background: isDark ? '#ffff' : '#191c24', color: isDark ? '#0d0d0d' : '#ffff' }}>
          <div className="card-body">
            <div className="row">
              <div className="col-9">
                <div className="d-flex align-items-center align-self-start">
                  {/* I want the size of the text to shrink a tiny bit if the character count is over 13% */}
                  <h3 className="mb-0" style={{ fontSize: PriceVar && PriceVar.length > 12 ? '1rem' : '1.5rem', color: isDark ? '#191c24' : '#ffff' }}  >{PriceVar ? "$" + PriceVar : '...'}</h3>
                  <p className={PriceArrow && PriceArrow === false ? "text-danger ml-2 mb-0 font-weight-medium" : "text-success ml-2 mb-0 font-weight-medium"}>{PricePerVar ? PricePerVar : '...'}%</p>
                </div>
              </div>
              {/* <div className="col-3">
                    <div className="icon icon-box-success ">
                      <span className="mdi mdi-arrow-top-right icon-item"></span>
                   
                </div>
              </div> */}
              <div className="col-3">
                <div className={PriceArrow && PriceArrow === false ? `icon icon-box-danger` : `icon icon-box-success`} style={{ transform: PriceArrow && PriceArrow === false ? 'rotate(180deg)' : '' }}>
                  <span className="mdi mdi-arrow-top-right icon-item"></span>

                </div>
                {/* <div className="icon icon-box-success ">
                  <span className="mdi mdi-arrow-top-right icon-item"></span>

                </div> */}
              </div>
            </div>
            {/* ({TokenSymbol ? TokenSymbol : 'Symbol'}/BNB) */}
            <h6 className="text-muted font-weight-normal" style={{ color: isDark ? '#191c24' : '#ffff' }} >{NameVar ? NameVar : '...'}{TSymbol ? `(${TSymbol}/BNB)` : ''}</h6>
          </div>
        </div>
      </div>


      <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
        <div className="card" style={{ background: isDark ? '#ffff' : '#191c24', color: isDark ? '#0d0d0d' : '#ffff' }}>
          <div className="card-body">
            <div className="row">
              <div className="col-9">
                <div className="d-flex align-items-center align-self-start">
                  <h3 className="mb-0" style={{ color: isDark ? '#191c24' : '#ffff' }}>{MarketCapVar ? MarketCapVar : '...'}</h3>
                  {/* <p className="text-success ml-2 mb-0 font-weight-medium">+3.5%</p> */}
                </div>
              </div>
              <div className="col-3">
                <div className="icon icon-box-success bg-transparent ">
                  {/* <span className="mdi mdi-arrow-top-right icon-item"></span> */}
                </div>
              </div>
            </div>
            <h6 className="text-muted font-weight-normal">Market Cap</h6>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
        <div className="card" style={{ background: isDark ? '#ffff' : '#191c24', color: isDark ? '#0d0d0d' : '#ffff' }}>

          <div className="card-body">
            <div className="row">
              <div className="col-9">
                <div className="d-flex align-items-center align-self-start">
                  <h3 className="mb-0" style={{ color: isDark ? '#191c24' : '#ffff' }}>{TokenVolume ? TokenVolume : '...'}</h3>
                  {/* <p className="text-success ml-2 mb-0 font-weight-medium">+3.5%</p> */}
                </div>
              </div>
              <div className="col-3">
                <div className="icon icon-box-success bg-transparent ">
                  {/* <span className="mdi mdi-arrow-top-right icon-item"></span> */}
                </div>
              </div>
            </div>
            <h6 className="text-muted font-weight-normal">Volume</h6>
          </div>
        </div>
      </div>



    </div>
    <div className="row justify-content-center">

      <div className="col-xl-9 grid-margin stretch-card">
        <div className={isDark ? `card bg-light text-dark ` : `card text-light`}>
          <div className="card-body" style={{ padding: '1.1rem 1.1rem' }}>
            <TVChartContainer GO={GO} isDark={isDark} />
          </div>
        </div>
      </div>
      {/* <div className="col-xl-3 col-sm-6 grid-margin stretch-card flex-column">
        <div className={isDark ? `card bg-light text-dark ` : `card text-light `}>
          <div className="card-body " style={{ padding: '1.1rem 1.1rem', height: '494px' }} >

            <div className="row pl-2 align-items-center" style={{ marginTop: '38px' }}>

              <div className='col-9 mt-1'>
                <div className='col-12 p-0 '><p className='mb-2 fontTN'>{Totalsupply ? nf.format(Totalsupply) : '...'}</p></div>
                <div className='col-12 p-0'><h6 className='mb-2 mt-1 fontTN text-muted font-weight-normal'>{'Total Supply'}</h6></div>
              </div>

            </div>
            <div className="row pl-2 align-items-center" style={{ marginTop: '38px' }}>

              <div className='col-9 mt-1'>
                <div className='col-12 p-0'><p className='mb-2 fontTN'>{Csupply ? nf.format(Csupply) : '...'}</p></div>
                <div className='col-12  p-0'><p className='mb-2 mt-1 fontTN text-muted font-weight-normal' >{'Circulating Supply'}</p></div>
              </div>
            </div>
            <div className="row pl-2 align-items-center" style={{ marginTop: '38px' }}>
              <div className='col-6 mt-1'>
                <div className='col-12 p-0 '><p className='mb-2 fontTN'>{TokenVolume ? TokenVolume : '...'}</p></div>
                <div className='col-12 p-0'><h6 className='mb-2 mt-1 text-muted font-weight-normal'>{'Volume'}</h6></div>
              </div>
              <div className='col-6 mt-1 '>
                <div className='col-12 p-0 '><p className='mb-1 fontTN'>{TokenLiquidity ? TokenLiquidity : '...'}</p></div>
                <div className='col-12   p-0'><p className='mb-2 mt-1 text-muted font-weight-normal'>{'Liquidity'}</p></div>
              </div>

            </div>
            <hr />
          </div>
        </div>

        <div className='row'>
          <div className='col-xl-12  stretch-card'>
            <div className={isDark ? `card bg-light text-dark ` : `card text-light`} style={{ height: '149px' }}>
              <div className="card-body " style={{ padding: '1.1rem 1.1rem' }} >
                <div className='col-12 mt-1'>
                  <div className='col-12 p-0 '><p className='mb-2 fontTN'>Your Wallet:</p></div>
                  <div className='col-12 p-0'><h6 className='mb-2 mt-1 text-muted font-weight-normal'>{'Wallet BNB Address'}</h6></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="col-xl-3 col-sm-12 col-md-12 grid-margin stretch-card flex-column">
        <div className={isDark ? `card bg-light text-dark ` : `card text-light `}>
          <div className={isDark ? 'card-body light_mode' : 'card-body dark_mode'} style={{ padding: '1.1rem 1.1rem', height: '494px' }}>
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
              <Tab eventKey="home" title="Token" className="test-tab " >
                <div className="media">
                  <div className="media-body">
                    <div className="row pl-2 align-items-center" >
                      <div className='col-12 p-0'><h6 className='mb-2 mt-1 fontTN text-muted font-weight-normal'>{'Total Supply'}</h6></div>
                      <div className='col-12 p-0 '><p className='mb-2 fontTN'>{Totalsupply ? nf.format(Totalsupply) : '...'}</p></div>

                    </div>
                    <div className="row pl-2 align-items-center" >
                      <div className='col-12  p-0'><p className='mb-2 mt-1 fontTN text-muted font-weight-normal' >{'Circulating Supply'}</p></div>
                      <div className='col-12 p-0'><p className='mb-2 fontTN'>{Csupply ? nf.format(Csupply) : '...'}</p></div>

                    </div>
                    <div className="row pl-2 align-items-center" >
                      <div className='col-12 p-0'><h6 className='mb-2 mt-1 text-muted font-weight-normal'>{'Volume'}</h6></div>
                      <div className='col-12 p-0 '><p className='mb-2 fontTN'>{TokenVolume ? TokenVolume : '...'}</p></div>


                    </div>
                    <div className="row pl-2 align-items-center" >
                      <div className='col-12   p-0'><p className='mb-2 mt-1 text-muted font-weight-normal'>{'LiquidityV1'}</p></div>
                      <div className='col-12 p-0 '><p className='mb-1 fontTN'>{TokenLiquidity ? TokenLiquidity[0] : '...'}</p></div>


                    </div>
                    <div className="row pl-2 align-items-center" >
                      <div className='col-12   p-0'><p className='mb-2 mt-1 text-muted font-weight-normal'>{'LiquidityV2'}</p></div>
                      <div className='col-12 p-0 '><p className='mb-1 fontTN'>{TokenLiquidity ? TokenLiquidity[1] : '...'}</p></div>


                    </div>


                    <hr />
                  </div>


                </div>
              </Tab>
              <Tab eventKey="profile responsive" title="Wallet">
                <div className="media">
                  <div className="media-body">
                    <div className="row pl-2 align-items-center" >
                      <div className='col-12 p-0'><h6 className='mb-2 mt-1 fontTN text-muted font-weight-normal'>{'Wallet Balance'}</h6></div>
                      <div className='col-12 p-0 '><p className='mb-2 fontTN'>{walletbalance ? walletbalance : '...'}</p></div>

                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
        {/* <div className={isDark ? `card bg-light text-dark ` : `card text-light `}>
          <div className="card-body " style={{ padding: '1.1rem 1.1rem', height: '494px' }} >
            <div className='col-12 mt-1'>
              <div className='col-12 p-0 '><p className='mb-2 fontTN'>Your Wallet:</p></div>
              <div className='col-12 p-0'><h6 className='mb-2 mt-1 text-muted font-weight-normal'>{'Wallet BNB Address'}</h6></div>
            </div>
          </div>
        </div> */}
      </div>
      {/* <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
        <div className={isDark ? `card bg-light text-dark ` : `card text-light`}>
          <div className="card-body">
            <div className="row align-items-center">
              <div className='col-6 mt-1'>
                <div className='col-12 p-0 '><p style={{ fontSize: '15px' }} className='mb-2'>{totalSupply ? totalSupply : '00000'}</p></div>
                <div className='col-12 p-0'><h6 className='mb-2 mt-1 text-muted font-weight-normal'>{'Total Supply'}</h6></div>
              </div>
              <div className='col-6 mt-1 p-0'>
                <div className='col-12 p-0'><p className='mb-2'>{cirsupply ? cirsupply : '00000'}</p></div>
                <div className='col-12  p-0'><p className='mb-2 mt-1 text-muted font-weight-normal'>{'Circulating Supply'}</p></div>
              </div>

            </div>

          </div>

        </div>
      </div> */}

    </div>

    <div style={{ background: isDark ? `#ffff` : `#191c24`, borderRadius: '5px' }} className="col-md-12 col-lg-12 grid-margin stretch-card">
      <div className={isDark ? `card border-0 bg-light text-dark ` : `card border-0 text-light`}>
        <div className="card-body">
          <div className='d-flex justify-content-between tappause'>
            {/* <div>  <h4 className="card-title">Transactions</h4></div> */}
            <div className='TansactionBTNGgroup'>
              <div className="btn-group mb-2" role="group" aria-label="Basic example">
                <button type="button" className={isDark ? `btn btn-outline-dark ` : `btn btn-outline-secondary`} onClick={() => handleTransDiffer('All')}>Transaction</button>
                <button type="button" className={isDark ? `btn btn-outline-dark` : `btn btn-outline-secondary`} onClick={() => handleTransDiffer('Sell')} >Sell</button>
                <button type="button" className={isDark ? `btn btn-outline-dark` : `btn btn-outline-secondary`} onClick={() => handleTransDiffer('Buy')}>Buy</button>
                <button type="button" className={isDark ? `btn btn-outline-dark` : `btn btn-outline-secondary`} onClick={() => handleTransDiffer('WTXS')}>Wallet TXs</button>
              </div>
              {/* <div className='btnGRROUP  mb-2'>
                <button type="button" className="btn btn-outline-danger btn-fw" onClick={() => handleTransDiffer('All')}>Transaction</button>
                <button type="button" className="btn btn-outline-danger btn-fw  " onClick={() => handleTransDiffer('Sell')} >Sell</button>
                <button type="button" className="btn btn-outline-danger btn-fw  " onClick={() => handleTransDiffer('Buy')}>Buy</button>
              </div> */}
              <div className="btn-group mb-2" role="group" aria-label="Basic example">
                <button type="button" className={isDark ? `btn btn-outline-dark` : `btn btn-outline-secondary`}>Top</button>
                <button type="button" className={isDark ? `btn btn-outline-dark` : `btn btn-outline-secondary`}>Pause</button>
              </div>
              {/* <div className='btnGRROUP mb-2'>
                <button type="button" className="btn btn-outline-success btn-fw ">Tap</button>
                <button type="button" className="btn btn-outline-success btn-fw  ">Pause</button>
              </div> */}
            </div>
          </div>
          {/* <div className='btnGRROUP mb-2'>
              <button type="button" className="btn btn-outline-success btn-fw">Top</button>
              <button type="button" className="btn btn-outline-success btn-fw ml-2 pausebtn">Pause</button>
              <button type="button" className="btn btn-outline-success btn-fw ml-2 pausebtn">Pause</button>
            </div> */}
          {/* <div className='btnGRROUP'>
              <button type="button" className="btn btn-outline-success btn-fw">Top</button>
              <button type="button" className="btn btn-outline-success btn-fw ml-2 pausebtn">Pause</button>
            </div>
          </div> */}


          <div className={`table-responsive ${isDark ? `scrolbrwhite` : `scrolbr`}`} style={{ height: '400px' }}>
            {/* SellBuytransKey */}
            {SellBuytransKey === 'Sell' ? <table className='table table-striped'>
              <thead className={isDark ? `firstChild bg-light text-dark` : `firstChild bg-dark `}>
                <tr>
                  <th> Account </th>
                  <th> TxHash </th>
                  <th> Sell Amount </th>
                </tr>
              </thead>

              <tbody className={isDark ? 'tbod2' : 'tbod'}>
                {finalSellBuyArray && finalSellBuyArray.length && finalSellBuyArray.length > 0 ?
                  finalSellBuyArray.map((transdata,i) => {
                    // style={{background:isDark ? '#a9a9a9' : 'black'}}
                    return <tr key={i} className={transdata.Buy === true ? 'text-success' : 'text-danger'} >
                      <td><a href={"https://bscscan.com/token/" + tokenAddress + "=" + transdata.user} target="_blank">{transdata.user}</a></td>
                      <td><a href={"https://bscscan.com/tx/" + transdata.rawHash} target="_blank">{transdata.thash}</a></td>
                      <td>
                        {transdata.ValueUsd}
                      </td>
                    </tr>
                  }) : <tr><td className="square-box-loader">No Transaction Yet</td></tr>}
              </tbody>
            </table> : SellBuytransKey === 'Buy' ? <table className='table table-striped'>
              <thead className={isDark ? `firstChild bg-light text-dark` : `firstChild bg-dark `}>
                <tr>
                  <th> Account </th>
                  <th> TxHash </th>
                  <th> Buy Amount </th>
                </tr>
              </thead>

              <tbody className={isDark ? 'tbod2' : 'tbod'}>
                {finalSellBuyArray && finalSellBuyArray.length && finalSellBuyArray.length > 0 ?
                  finalSellBuyArray.map((transdata,i) => {
                    // style={{background:isDark ? '#a9a9a9' : 'black'}}
                    return <tr key={i} className={transdata.Buy === true ? 'text-success' : 'text-danger'} >
                      <td><a href={"https://bscscan.com/token/" + tokenAddress + "?a=" + transdata.user} target="_blank">{transdata.user}</a></td>
                      <td><a href={"https://bscscan.com/tx/" + transdata.rawHash} target="_blank">{transdata.thash}</a></td>
                      <td>
                        {transdata.ValueUsd}
                      </td>
                    </tr>
                  }) : <tr><td className="square-box-loader">No Transaction Yet</td></tr>}
              </tbody>
            </table> : SellBuytransKey === 'All' ? <table className='table table-striped'>
              <thead className={isDark ? `firstChild bg-light text-dark` : `firstChild bg-dark `}>
                <tr>
                  <th></th>
                  <th> Time </th>
                  <th> Tokens </th>
                  <th> Value </th>
                  <th> TxHash </th>
                </tr>
              </thead>

              <tbody className={isDark ? 'tbod2' : 'tbod'}>
                {finalSellBuyArray && finalSellBuyArray.length && finalSellBuyArray.length > 0 ?
                  finalSellBuyArray.map((transdata,i) => {
                    // style={{background:isDark ? '#a9a9a9' : 'black'}}
                    return <tr key={i} className={transdata.Buy === true ? 'text-success' : 'text-danger'} >
                      <td>  {transdata.buySell} </td>
                      <td className="py-1">
                        {transdata.Timestamp}
                      </td>
                      <td>{formatNumber(transdata.tokenSellorBuy)} </td>
                      <td>
                        {transdata.ValueUsd}
                      </td>
                      <td><a href={"https://bscscan.com/tx/" + transdata.rawHash} target="_blank">{transdata.thash}</a></td>
                    </tr>
                  }) : <tr><td className="square-box-loader">No Transaction Yet</td></tr>}
              </tbody>
            </table> : SellBuytransKey === 'WTXS' ? <table className='table table-striped'>
              <thead className={isDark ? `firstChild bg-light text-dark` : `firstChild bg-dark `}>
                <tr>
                  <th></th>
                  <th> Time </th>
                  <th> Tokens </th>
                  <th> Value </th>
                  <th> TxHash </th>
                </tr>
              </thead>

              <tbody className={isDark ? 'tbod2' : 'tbod'}>
                {WalletUSERTransObj && WalletUSERTransObj.length && WalletUSERTransObj.length > 0 ?
                  WalletUSERTransObj.map((transdata,i) => {
                    // style={{background:isDark ? '#a9a9a9' : 'black'}}
                    return <tr key={i} className={transdata.Buy === true ? 'text-success' : 'text-danger'} >
                      <td>  {transdata.buySell} </td>
                      <td className="py-1">
                        {transdata.Timestamp}
                      </td>
                      <td>{formatNumber(transdata.tokenSellorBuy)} </td>
                      <td>
                        {transdata.ValueUsd}
                      </td>
                      <td><a href={"https://bscscan.com/tx/" + transdata.rawHash} target="_blank">{transdata.thash}</a></td>
                    </tr>
                  }) : <tr><td className="square-box-loader">Connect Your Wallet or Enter an Address</td></tr>}
              </tbody>
            </table> : ''}
            {/* <table className='table table-striped'>
              <thead className={isDark ? `firstChild bg-light text-dark` : `firstChild bg-dark `}>
                <tr>
                  <th></th>
                  <th> Time </th>
                  <th> Tokens </th>
                  <th> Value </th>
                  <th> TxHash </th>
                </tr>
              </thead>

              <tbody className={isDark ? 'tbod2' : 'tbod'}>
                {finalSellBuyArray && finalSellBuyArray.length && finalSellBuyArray.length > 0 ?
                      finalSellBuyArray.map(transdata => {
                        // style={{background:isDark ? '#a9a9a9' : 'black'}}
                        return <tr className={transdata.Buy === true ? 'text-success' : 'text-danger'} >
                          <td>  {transdata.buySell} </td>
                          <td className="py-1">
                            {transdata.Timestamp}
                          </td>
                          <td>  {transdata.tokenSellorBuy} </td>
                          <td>
                            {transdata.ValueUsd}
                          </td>
                          <td><a href={"https://bscscan.com/tx/" + transdata.rawHash} target="_blank">{transdata.thash}</a></td>
                        </tr>
                      }) : <div className="square-box-loader">No Transaction Yet</div>}
              </tbody>
            </table> */}
          </div>
        </div>
      </div>
    </div>
    {/* <div className="row">
      <div className="col-xl-12 col-sm-6 grid-margin stretch-card">
        <div className={isDark ? `card bg-light text-dark ` : `card text-light`}>
          <div className="card-body" style={{ padding: '1.1rem 1.1rem' }} >
            <h5>{''}</h5>
            <div className="row pl-2 align-items-center" style={{ marginTop: '38px' }}>
              <div className='col-5 mt-1 p-0'>
                <div className='col-12 p-0 '><p style={{ fontSize: '15px' }} className='mb-2'>{''}</p></div>
                <div className='col-12 p-0'><h6 className='mb-2 mt-1 text-muted font-weight-normal'>{''}</h6></div>
              </div>
              <div className='col-7 mt-1'>
                <div className='col-12 p-0'><p className='mb-2' style={{ fontSize: '15px' }}>{''}</p></div>
                <div className='col-12  p-0'><p className='mb-2 mt-1 text-muted font-weight-normal' >{''}</p></div>
              </div>

            </div>

          </div>
        </div>
      </div>
      {/* <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
        <div className={isDark ? `card bg-light text-dark ` : `card text-light`}>
          <div className="card-body" style={{ padding: '1.1rem 1.1rem' }}>
            <h5>Contact</h5>
            <div className="row">
              <div className="col-8 col-sm-12 col-xl-8 my-auto">
                <div className="d-flex d-sm-block d-md-flex align-items-center">
                  <h2 className="mb-0">$32123</h2>
                  <p className="text-success ml-2 mb-0 font-weight-medium">+3.5%</p>
                </div>
                <h6 className="text-muted font-weight-normal">11.38% Since last month</h6>
              </div>
              <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                <i className="icon-lg mdi mdi-codepen text-primary ml-auto"></i>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    {/* <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
        <div className={isDark ? `card bg-light text-dark ` : `card text-light`}>
          <div className="card-body" style={{ padding: '1.1rem 1.1rem' }}>
            <h5>Info</h5>
            <div className="row">
              <div className="col-8 col-sm-12 col-xl-8 my-auto">
                <div className="d-flex d-sm-block d-md-flex align-items-center">
                  <h6 className="text-muted font-weight-normal" style={{ marginTop: '35px' }}>This is the token description</h6>
                </div>

              </div>
              <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                <i className="icon-lg mdi mdi-codepen text-primary ml-auto"></i>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    {/* <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
        <div className={isDark ? `card bg-light text-dark ` : `card text-light`}>
          <div className="card-body" style={{ padding: '1.1rem 1.1rem' }}>
            <h5>Social Links</h5>
            <div className="row">
              <div className="col-8 col-sm-12 col-xl-8 my-auto">
                <div className="d-flex d-sm-block d-md-flex align-items-center">
                  <h2 className="mb-0">$32123</h2>
                  <p className="text-success ml-2 mb-0 font-weight-medium">+3.5%</p>
                </div>
                <h6 className="text-muted font-weight-normal">11.38% Since last month</h6>
              </div>
              <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                <i className="icon-lg mdi mdi-codepen text-primary ml-auto"></i>
              </div>
            </div>
          </div>
        </div>
      </div> */}

    {/* </div>  */}
    {/* </> : <Spinner />} */}



  </div>
  //  : <Spinner />
}
const mapStateToProps = (state) => {
  return {
    PriceVar: state.Price.PriceVar,
    NameVar: state.Name.NameVar,
    TSymbol: state.TokenSymbol.TSymbol,
    PricePerVar: state.PricePer.PricePerVar,
    PriceArrow: state.PRICEARROW.PriceArrow,
    MarketCapVar: state.MARKETcap.MarketCapVar,
    TokenLogo: state.TLogo.TokenLogo,
    TokenVolume: state.TVolume.TokenVolume,
    TokenLiquidity: state.TLiquidity.TokenLiquidity,
    Csupply: state.CirSupply.Csupply,
    Totalsupply: state.TSupply.Totalsupply,
    Transactions: state.TransactionsData.Transactions,
    FinalTransactions: state.TransactionsData.FinalTransactions,
    // walletbalance: state.WALLETPRICE.walletbalance,
    // WalletTransObj: state.WTransObj.WalletTransObj,
    WalletUSERTransObj: state.WTXUSERObj.WalletTransObj,
    TransactionOBJ: state.WTransObj.TransactionOBJ,
    walletbalance: state.WTXUSERObj.walletbalance,
  }
}
export default connect(mapStateToProps, { ResetState })(Dashboard);