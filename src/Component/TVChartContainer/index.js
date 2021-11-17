import React, { useEffect, useState } from 'react';
import * as axios from 'axios';
import { widget } from '../../assets/charting_library'
const TVChartContainer = (props) => {
  // const [] = useState();
  // console.log(props.tokenAddress,'props.tokenAddress');
  useEffect(() => {
    const apiKey = 'BQY4cnSlv1g2tQqoZmilsBXVZFGykCnl'

    const configurationData = {
      supported_resolutions: ['1', '5', '15', '30', '60', '1D', '1W', '1M']
    };

    const queryCoinInfo = `
query ($tokenAddress: String, $exchange: String) {
  ethereum(network: bsc) {
    dexTrades(
      options: {limit: 1}
      exchangeName: {is: $exchange}
      baseCurrency: {is: $tokenAddress}
    ) {
      baseCurrency {
        name
        symbol
        decimals
      }
    }
  }
}
`
    const queryCoinBars = `
query ($from: ISO8601DateTime!, $to: ISO8601DateTime!, $interval: Int!, $tokenAddress: String, $exchange: String) {
  ethereum(network: bsc) {
    dexTrades(
      options: {asc: "timeInterval.minute"}
      date: {since: $from, till: $to}
      exchangeName: {is: $exchange}
      baseCurrency: {is: $tokenAddress},
      quoteCurrency: {is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"},
      tradeAmountUsd: {gt: 10}
    ) {
      timeInterval {
        minute(count: $interval, format: "%Y-%m-%dT%H:%M:%SZ")
      }
      volume: tradeAmount(in: USD)
      high: quotePrice(calculate: maximum)
      low: quotePrice(calculate: minimum)
      open: minimum(of: block, get: quote_price)
      close: maximum(of: block, get: quote_price)
    }
  }
}
`

    const queryBUSDPrice = `
query{
  ethereum(network: bsc) {
    dexTrades(
      baseCurrency: {is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"}
      quoteCurrency: {is: "0xe9e7cea3dedca5984780bafc599bd69add087d56"}
      options: {desc: ["block.height", "transaction.index"], limit: 1}
    ) {
      block {
        height
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
      }
      transaction {
        index
      }
      baseCurrency {
        symbol
      }
      quoteCurrency {
        symbol
      }
      quotePrice
    }
  }
}`

    let price;
    const barsCache = new Map();
    const timers = new Map();

    const datafeed = {
      onReady: (callback) => {
        //console.log('[onReady]: Method call');
        setTimeout(() => callback(configurationData));
      },
      searchSymbols: (userInput, exchange, symbolType, onResultReadyCallback) => {
        //console.log('[searchSymbols]: Method call');
      },
      resolveSymbol: async (symbolName, onSymbolResolvedCallback, onResolveErrorCallback) => {
        //console.log('[resolveSymbol]: Method call', symbolName);

        const [exchange, token] = symbolName.split(':')

        const response = await axios.post(
          'https://graphql.bitquery.io', {
          query: queryCoinInfo,
          variables: {
            tokenAddress: token,
            exchange
          }
        }, { headers: { 'X-API-KEY': apiKey } })

        //console.log('Bitquery.io API response:', response)

        // const coin = response?.data?.data?.ethereum?.dexTrades?.[0]?.baseCurrency
        const coin = response && response.data && response.data.data.ethereum && response.data.data.ethereum.dexTrades && response.data.data.ethereum.dexTrades[0] && response.data.data.ethereum.dexTrades[0].baseCurrency

        //console.log('Coin:', coin)

        if (!coin) {
          onResolveErrorCallback()
        } else {
          const symbol = {
            ticker: token,
            name: `${coin.symbol}/USD`,
            // description: symbolItem.description,
            // type: symbolItem.type,
            session: '24x7',
            timezone: 'Etc/UTC',
            exchange,
            pricescale: 100000000000,
            has_intraday: true,
            intraday_multipliers: ['1', '5', '15', '30', '60'],
            has_weekly_and_monthly: false,
            supported_resolutions: configurationData.supported_resolutions,
            data_status: 'streaming',
          }

          //console.log('Symbol:', symbol)

          // get WBNB to BUSD price
          const res = await axios.post(
            'https://graphql.bitquery.io', {
            query: queryBUSDPrice,
          }, { headers: { 'X-API-KEY': apiKey } })

          // price = res?.data?.data?.ethereum?.dexTrades?.[0]?.quotePrice
          price = res && res.data && res.data.data.ethereum && res.data.data.ethereum.dexTrades && res.data.data.ethereum.dexTrades[0] && res.data.data.ethereum.dexTrades[0].quotePrice

          //console.log('BSUD Price:', price)

          onSymbolResolvedCallback(symbol)
        }
      },

      getBars: async (symbolInfo, resolution, periodParams, onHistoryCallback, onErrorCallback) => {
        try {
          const { from, to, firstDataRequest } = periodParams

          if (resolution === '1D') resolution = 1440

          //console.log('Get Bars:', symbolInfo, resolution, periodParams)

          const response = await axios.post(
            'https://graphql.bitquery.io', {
            query: queryCoinBars,
            variables: {
              from: new Date(from * 1000).toISOString(),
              to: new Date(to * 1000).toISOString(),
              interval: Number(resolution),
              tokenAddress: symbolInfo.ticker,
              exchange: symbolInfo.exchange
            }
          }, { headers: { 'X-API-KEY': apiKey } })

          //console.log('Bitquery.io API response:', response)

          let bars = []

          if (response && response.data && response.data.data.ethereum && response.data.data.ethereum.dexTrades && response.data.data.ethereum.dexTrades.length) {
            if (price) {

              for (let index = 0; index < response.data.data.ethereum.dexTrades.length - 1; index++) {
                const el = response.data.data.ethereum.dexTrades[index]
                const nextEl = response.data.data.ethereum.dexTrades[index + 1]

                bars.push({
                  time: new Date(el.timeInterval.minute).getTime(), // date string in api response
                  low: el.low * price,
                  high: el.high * price,
                  open: Number(el.open) * price, // string in api response
                  close: Number(nextEl.open) * price, // string in api response
                  volume: el.volume
                })
              }

              // bars = response.data.data.ethereum.dexTrades.map(el => ({
              //   time: new Date(el.timeInterval.minute).getTime(), // date string in api response
              //   low: el.low * price,
              //   high: el.high * price,
              //   open: Number(el.open) * price, // string in api response
              //   close: Number(el.close) * price, // string in api response
              //   volume: el.volume
              // }))
            }
          }

          // filter bars
          bars = bars.filter((bar) => bar.time > from * 1000 && bar.time <= to * 1000)

          // filter bars
          //bars = bars.filter((bar) => bar.open.toFixed(9) != bar.close.toFixed(9))

          //console.log('Bars after filter:', bars.length, response && response.data && response.data.data.ethereum && response.data.data.ethereum.dexTrades.length)

          //console.log('Bars:', bars)

          if (bars.length) {
            if (firstDataRequest) barsCache.set(symbolInfo.ticker, bars[bars.length - 1])
            onHistoryCallback(bars, { noData: false })
          } else {
            onHistoryCallback(bars, { noData: true })
          }
        } catch (err) {
          //console.log(err)
          onErrorCallback(err)
        }
      },
      subscribeBars: (symbolInfo, resolution, onRealtimeCallback, subscribeUID, onResetCacheNeededCallback) => {
        //console.log('[subscribeBars]: Method call with subscribeUID:', subscribeUID);
        const queryLatestPrice = `query ($tokenAddress: String) {
          swaps(first: 1,
            orderBy: timestamp,
            orderDirection: desc,
            where: {
              token0: $tokenAddress
              token1: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"
            }) {
            timestamp
            token0 {
              symbol
              id
              name
            }
            token1 {
              symbol
              id
              name
            }
            amount0In
            amount1In
            amount0Out
            amount1Out
            amountUSD
          }
        }
        `
        const token = symbolInfo.ticker

        const timer = setInterval(async () => {
          const response = await axios.post(
            'https://bsc.streamingfast.io/subgraphs/name/pancakeswap/exchange-v2', {
            query: queryLatestPrice,
            variables: {
              tokenAddress: token
            }
          })

          if (response
            && response.data
            && response.data.data
            && response.data.data.swaps
            && response.data.data.swaps[0]) {
            const swap = response.data.data.swaps[0]

            //console.log('Swap:', swap)

            const amount0 = Math.abs(swap.amount0In - swap.amount0Out)
            const amount1 = Math.abs(swap.amount1In - swap.amount1Out)

            const priceInWBNB = amount1 / amount0

            const priceInUSD = (swap.amountUSD / amount1) * priceInWBNB

            //console.log('Prices:', priceInWBNB, priceInUSD)

            const time = Math.floor(swap.timestamp / resolution) * resolution * 1000

            const bar = barsCache.get(symbolInfo.ticker)

            if (bar) {
             // console.log('timestamps:', bar.time, time)

              let newBar
              if (time > bar.time) {
                // add new bar
                newBar = {
                  time,
                  open: priceInUSD,
                  high: priceInUSD,
                  low: priceInUSD,
                  close: priceInUSD,
                  volume: amount1
                }

                console.log('Add:', newBar)
              } else {
                // update existing
                newBar = {
                  ...bar,
                  high: Math.max(bar.high, priceInUSD),
                  low: Math.min(bar.low, priceInUSD),
                  close: priceInUSD,
                  volume: bar.volume + amount1
                }

                //console.log('Update:', newBar)
              }

              barsCache.set(symbolInfo.ticker, newBar)

              onRealtimeCallback(newBar)
            }
          }
        }, 10000)

        timers.set(subscribeUID, timer)

      },
      unsubscribeBars: (subscriberUID) => {
        //console.log('[unsubscribeBars]: Method call with subscriberUID:', subscriberUID);

        const timer = timers.get(subscriberUID)
        timer.clear()

        timers.delete(subscriberUID)
      },
    };

    // const { searchParams } = new URL(window.location.href)

    // const reload = document.getElementById('reload')
    // const tokenAdd = document.getElementById('token-add')

    // reload.onclick = () => {
    //   window.location = '/?token=Pancake v2:' + tokenAdd.value
    // }

    const wg = new widget({
      // debug: true, // uncomment this line to see Library errors and warnings in the console
      // fullscreen: true,
      // autosize: true,
      symbol: `Pancake v2:${props.GO}`,
      // symbol: 'Pancake:0xac51066d7bec65dc4589368da368b212745d63e8',
      interval: '60',
      container: "tv_chart_container",

      //	BEWARE: no trailing slash is expected in feed URL
      datafeed,
      library_path: "charting_library/",
      locale: "en",
      width: '100%',
      height: '460px',

      // disabled_features: ["use_localstorage_for_settings"],
      // enabled_features: ["study_templates"],
      disabled_features: ["use_localstorage_for_settings", "header_symbol_search", "header_compare", "left_toolbar"],
      enabled_features: [],
      // charts_storage_url: 'https://saveload.tradingview.com',
      // charts_storage_api_version: "1.1",
      // client_id: 'tradingview.com',
      // user_id: 'public_user_id',
      theme: props.isDark ? 'Light' : 'Dark',
    });
  }, [props.isDark, props.GO])
  return (
    <div
      id={'tv_chart_container'}
      className={'TVChartContainer'}
    />
  );
}
// class TVChartContainer extends React.Component {
//   componentDidMount() {
//     const apiKey = 'BQYkxNJKLoWmTdT9OFlUvox7MkRzfkiE'

//     const configurationData = {
//       supported_resolutions: ['1', '5', '15', '30', '60', '1D', '1W', '1M']
//     };

//     const queryCoinInfo = `
// query ($tokenAddress: String, $exchange: String) {
//   ethereum(network: bsc) {
//     dexTrades(
//       options: {limit: 1}
//       exchangeName: {is: $exchange}
//       baseCurrency: {is: $tokenAddress}
//     ) {
//       baseCurrency {
//         name
//         symbol
//         decimals
//       }
//     }
//   }
// }
// `
//     const queryCoinBars = `
// query ($from: ISO8601DateTime!, $to: ISO8601DateTime!, $interval: Int!, $tokenAddress: String, $exchange: String) {
//   ethereum(network: bsc) {
//     dexTrades(
//       options: {asc: "timeInterval.minute"}
//       date: {since: $from, till: $to}
//       exchangeName: {is: $exchange}
//       baseCurrency: {is: $tokenAddress},
//       quoteCurrency: {is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"},
//       tradeAmountUsd: {gt: 10}
//     ) {
//       timeInterval {
//         minute(count: $interval, format: "%Y-%m-%dT%H:%M:%SZ")
//       }
//       volume: tradeAmount(in: USD)
//       high: quotePrice(calculate: maximum)
//       low: quotePrice(calculate: minimum)
//       open: minimum(of: block, get: quote_price)
//       close: maximum(of: block, get: quote_price)
//     }
//   }
// }
// `

//     const queryBUSDPrice = `
// query{
//   ethereum(network: bsc) {
//     dexTrades(
//       baseCurrency: {is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"}
//       quoteCurrency: {is: "0xe9e7cea3dedca5984780bafc599bd69add087d56"}
//       options: {desc: ["block.height", "transaction.index"], limit: 1}
//     ) {
//       block {
//         height
//         timestamp {
//           time(format: "%Y-%m-%d %H:%M:%S")
//         }
//       }
//       transaction {
//         index
//       }
//       baseCurrency {
//         symbol
//       }
//       quoteCurrency {
//         symbol
//       }
//       quotePrice
//     }
//   }
// }`

//     let price;


//     const datafeed = {
//       onReady: (callback) => {
//         //console.log('[onReady]: Method call');
//         setTimeout(() => callback(configurationData));
//       },
//       searchSymbols: (userInput, exchange, symbolType, onResultReadyCallback) => {
//         //console.log('[searchSymbols]: Method call');
//       },
//       resolveSymbol: async (symbolName, onSymbolResolvedCallback, onResolveErrorCallback) => {
//         //console.log('[resolveSymbol]: Method call', symbolName);

//         const [exchange, token] = symbolName.split(':')

//         const response = await axios.post(
//           'https://graphql.bitquery.io', {
//           query: queryCoinInfo,
//           variables: {
//             tokenAddress: token,
//             exchange
//           }
//         }, { headers: { 'X-API-KEY': apiKey } })

//         //console.log('Bitquery.io API response:', response)

//         // const coin = response?.data?.data?.ethereum?.dexTrades?.[0]?.baseCurrency
//         const coin = response && response.data && response.data.data.ethereum && response.data.data.ethereum.dexTrades && response.data.data.ethereum.dexTrades[0] && response.data.data.ethereum.dexTrades[0].baseCurrency

//         //console.log('Coin:', coin)

//         if (!coin) {
//           onResolveErrorCallback()
//         } else {
//           const symbol = {
//             ticker: token,
//             name: `${coin.symbol}/USD`,
//             // description: symbolItem.description,
//             // type: symbolItem.type,
//             session: '24x7',
//             timezone: 'Etc/UTC',
//             exchange,
//             pricescale: 100000000000,
//             has_intraday: true,
//             intraday_multipliers: ['1', '5', '15', '30', '60'],
//             has_weekly_and_monthly: false,
//             supported_resolutions: configurationData.supported_resolutions,
//             data_status: 'streaming',
//           }

//           //console.log('Symbol:', symbol)

//           // get WBNB to BUSD price
//           const res = await axios.post(
//             'https://graphql.bitquery.io', {
//             query: queryBUSDPrice,
//           }, { headers: { 'X-API-KEY': apiKey } })

//           // price = res?.data?.data?.ethereum?.dexTrades?.[0]?.quotePrice
//           price = res && res.data && res.data.data.ethereum && res.data.data.ethereum.dexTrades && res.data.data.ethereum.dexTrades[0] && res.data.data.ethereum.dexTrades[0].quotePrice

//           //console.log('BSUD Price:', price)

//           onSymbolResolvedCallback(symbol)
//         }
//       },

//       getBars: async (symbolInfo, resolution, periodParams, onHistoryCallback, onErrorCallback) => {
//         try {
//           const { from, to } = periodParams

//           if (resolution === '1D') resolution = 1440

//           //console.log('Get Bars:', symbolInfo, resolution, periodParams)

//           const response = await axios.post(
//             'https://graphql.bitquery.io', {
//             query: queryCoinBars,
//             variables: {
//               from: new Date(from * 1000).toISOString(),
//               to: new Date(to * 1000).toISOString(),
//               interval: Number(resolution),
//               tokenAddress: symbolInfo.ticker,
//               exchange: symbolInfo.exchange
//             }
//           }, { headers: { 'X-API-KEY': apiKey } })

//           //console.log('Bitquery.io API response:', response)

//           let bars = []

//           if (response && response.data && response.data.data.ethereum && response.data.data.ethereum.dexTrades && response.data.data.ethereum.dexTrades.length) {
//             if (price) {

//               for (let index = 0; index < response.data.data.ethereum.dexTrades.length - 1; index++) {
//                 const el = response.data.data.ethereum.dexTrades[index]
//                 const nextEl = response.data.data.ethereum.dexTrades[index + 1]

//                 bars.push({
//                   time: new Date(el.timeInterval.minute).getTime(), // date string in api response
//                   low: el.low * price,
//                   high: el.high * price,
//                   open: Number(el.open) * price, // string in api response
//                   close: Number(nextEl.open) * price, // string in api response
//                   volume: el.volume
//                 })
//               }

//               // bars = response.data.data.ethereum.dexTrades.map(el => ({
//               //   time: new Date(el.timeInterval.minute).getTime(), // date string in api response
//               //   low: el.low * price,
//               //   high: el.high * price,
//               //   open: Number(el.open) * price, // string in api response
//               //   close: Number(el.close) * price, // string in api response
//               //   volume: el.volume
//               // }))
//             }
//           }

//           // filter bars
//           bars = bars.filter((bar) => bar.time > from * 1000 && bar.time <= to * 1000)

//           // filter bars
//           //bars = bars.filter((bar) => bar.open.toFixed(9) != bar.close.toFixed(9))

//           //console.log('Bars after filter:', bars.length, response && response.data && response.data.data.ethereum && response.data.data.ethereum.dexTrades.length)

//           //console.log('Bars:', bars)

//           if (bars.length) {
//             onHistoryCallback(bars, { noData: false })
//           } else {
//             onHistoryCallback(bars, { noData: true })
//           }
//         } catch (err) {
//           //console.log(err)
//           onErrorCallback(err)
//         }
//       },
//       subscribeBars: (symbolInfo, resolution, onRealtimeCallback, subscribeUID, onResetCacheNeededCallback) => {
//         //console.log('[subscribeBars]: Method call with subscribeUID:', subscribeUID);
//       },
//       unsubscribeBars: (subscriberUID) => {
//         //console.log('[unsubscribeBars]: Method call with subscriberUID:', subscriberUID);
//       },
//     };

//     // const { searchParams } = new URL(window.location.href)

//     // const reload = document.getElementById('reload')
//     // const tokenAdd = document.getElementById('token-add')

//     // reload.onclick = () => {
//     //   window.location = '/?token=Pancake v2:' + tokenAdd.value
//     // }

//     const wg = new widget({
//       // debug: true, // uncomment this line to see Library errors and warnings in the console
//       // fullscreen: true,
//       // autosize: true,
//       symbol: `Pancake:${this.props.tokenAddress}`,
//       // symbol: 'Pancake:0xac51066d7bec65dc4589368da368b212745d63e8',
//       interval: '60',
//       container: "tv_chart_container",

//       //	BEWARE: no trailing slash is expected in feed URL
//       datafeed,
//       library_path: "charting_library/",
//       locale: "en",
//       width:'100%',
//       height:'400px',

//       // disabled_features: ["use_localstorage_for_settings"],
//       // enabled_features: ["study_templates"],
//       disabled_features: ["use_localstorage_for_settings", "header_symbol_search", "header_compare", "left_toolbar"],
//       enabled_features: [],
//       // charts_storage_url: 'https://saveload.tradingview.com',
//       // charts_storage_api_version: "1.1",
//       // client_id: 'tradingview.com',
//       // user_id: 'public_user_id',
//       theme: this.props.isDark ? 'Light' : 'Dark',
//     });
//   }
//   render() {
//     return (
//       <div
//         id={'tv_chart_container'}
//         className={'TVChartContainer'}
//       />
//     );
//   }
// }

export { TVChartContainer }