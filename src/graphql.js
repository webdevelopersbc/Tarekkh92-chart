const axios = require("axios")

const client = axios.create({
  baseURL: 'https://bsc.streamingfast.io/subgraphs/name/pancakeswap/exchange-v2'
})

const graphql = {
  getPrices: (token, timestamps) => client.post(
    '',
    {
      query: `query ($token: String!, $timestamps: [Int!]) {
        tokenDayDatas(where: {token: $token, date_in: $timestamps}) {
          priceUSD
          date
        }
      }
      `,
      variables: { token, timestamps }
    }
  ),
  getInfo: (token) => client.post(
    '',
    {
      query: `query ($token: String!) {
        tokenDayDatas(first: 1, orderBy: date, orderDirection: desc, where: {token: $token}) {
          dailyVolumeUSD
          totalLiquidityUSD
        }
      }
      `,
      variables: { token }
    }
  ),
  getTrasactions: (token, first) => client.post(
    '', {
    query: `query ($token: String, $first: Int) {
        swaps(first: $first,
          orderBy: timestamp,
          orderDirection: desc,
          where: {
            token0: $token
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
          transaction {
            id
          }
        }
      }
      `,
    variables: { token, first }
  }),
  searchTokens: (search, first) => client.post(
    '', {
    query: `query ($search: String, $first: Int) {
      tokens(first: $first, orderBy: tradeVolumeUSD, orderDirection: desc, where: {symbol_starts_with: $search}) {
        id
        name
        symbol
      }
    }
    `,
    variables: { search, first }
  })
}

/**
 * @typedef {Object} TokenPrice
 * @property {number} d0 price today in USD
 * @property {number} d1 price yesterday in USD
 * @property {number} d7 price a week ago in USD
 * @property {number} d30 price a month ago in USD
 * @property {number} d365 price a year ago in USD
 */

/**
 * @typedef {Object} TokenInfo
 * @property {number} volume daily volume for today in USD
 * @property {number} liquidity total liquidity in USD
 */

/**
 * @typedef {Object} TokenTransaction
 * @property {string} type Buy / Sell
 * @property {date} time timestamp
 * @property {string} id address in hex
 * @property {number} amount number of tokens
 * @property {number} amountInUSD amount of token in USD
 * @property {number} priceInUSD price of token in USD
 */

/**
 * @typedef {Object} Token
 * @property {string} id
 * @property {string} name 
 * @property {string} symbol
 */


/**
 * Returns prices of token
 * @param {string} token token address 
 * @returns {TokenPrice}
 * @example
 * const prices = await getTokenPrices("0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82")
 * @example
 * {
 *  d30: 15.990570561736304,
 *  d7: 25.145714905730355,
 *  d1: 25.273658030601776,
 *  d0: 24.61794076569993
 * }
 */
 export const getTokenPrices = async (token) => {
  const current = new Date().getTime() / 1000

  const secsInDay = 60 * 60 * 24
  const d0 = Math.floor(current / secsInDay) * secsInDay
  const d1 = d0 - secsInDay
  const d7 = d0 - (secsInDay * 7)
  const d30 = d0 - (secsInDay * 30)
  const d365 = d0 - (secsInDay * 365)

  const response = await graphql.getPrices(token, [
    d0,
    d1,
    d7,
    d30,
    d365
  ])

  const prices = {}

  if (response &&
    response.data &&
    response.data.data &&
    response.data.data.tokenDayDatas) {
    response.data.data.tokenDayDatas.forEach((item) => {
      if (item.date == d0) prices.d0 = Number(item.priceUSD)
      else if (item.date == d1) prices.d1 = Number(item.priceUSD)
      else if (item.date == d7) prices.d7 = Number(item.priceUSD)
      else if (item.date == d30) prices.d30 = Number(item.priceUSD)
      else if (item.date == d365) prices.d365 = Number(item.priceUSD)
    })
  }

  return prices
}

/**
 * Returns information of token
 * @param {string} token token address 
 * @returns {TokenInfo}
 * @example
 * const info = await getTokenInfo("0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82")
 * @example
 * {
 *  volume: 13848938.290100127,
 *  liquidity: 536478941.730173
 * }
 */
 export const getTokenInfo = async (token) => {
  const response = await graphql.getInfo(token)

  const info = {}

  if (response &&
    response.data &&
    response.data.data &&
    response.data.data.tokenDayDatas &&
    response.data.data.tokenDayDatas[0]) {
    const data = response.data.data.tokenDayDatas[0]

    info.volume = Number(data.dailyVolumeUSD)
    info.liquidity = Number(data.totalLiquidityUSD)
  }

  return info
}

/**
 * Returns 10 recent transactions
 * @param {string} token token address
 * @returns {[TokenTransaction]}
 * @example
 * const transactions = await getTrasactions("0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82")
 * @example
 * {
 *  type: 'Buy',
 *  time: 2021-08-30T03:38:48.000Z,
 *  id: '0x0b01fab7efb5702ac0802ab821068ee9ebc6da468ab7928927346671d412509d',
 *  amount: 14,
 *  amountInUSD: 343.67443307735715,
 *  priceInUSD: 24.548173791239797
 * }
 */
 export const getTrasactions = async (token) => {
  const response = await graphql.getTrasactions(token, 10)

  let transactions = []

  if (response &&
    response.data &&
    response.data.data &&
    response.data.data.swaps) {
    transactions = response.data.data.swaps.map((swap) => {
      const transaction = {}

      const amount0 = Math.abs(swap.amount0In - swap.amount0Out)
      const amount1 = Math.abs(swap.amount1In - swap.amount1Out)
      const priceInWBNB = amount1 / amount0
      const priceInUSD = (swap.amountUSD / amount1) * priceInWBNB

      transaction.type = swap.amount0In > swap.amount0Out ? 'Buy' : 'Sell'
      transaction.time = new Date(Number(swap.timestamp) * 1000)
      transaction.id = swap.transaction.id
      transaction.amount = amount0
      transaction.amountInUSD = (amount0 * priceInUSD)
      transaction.priceInUSD = priceInUSD

      return transaction
    })

    return transactions
  }
}

/**
 * Returns top 5 tokens by their total volume
 * @param {string} search input 
 * @returns {token}
 * @example
 * const tokens = await searchTokens('ALICE')
 * @example
 * [
 *  { name: 'ALICE', symbol: 'ALICE' },
 *  { name: 'Alice Monster', symbol: 'ALICEMON' },
 *  { name: 'AliceSwap Token', symbol: 'ALICE' },
 *  { name: 'Alice BankNFT', symbol: 'ALICE-NFT' },
 *  { name: 'Alice Chain', symbol: 'ALICECHAIN' }
 * ]
 */
 export const searchTokens = async (search) => {
  const response = await graphql.searchTokens(search, 5)

  let tokens = []

  if (response &&
    response.data &&
    response.data.data &&
    response.data.data.tokens) tokens = response.data.data.tokens

  return tokens
}



// const axios = require("axios")

// const client = axios.create({
//   baseURL: 'https://bsc.streamingfast.io/subgraphs/name/pancakeswap/exchange-v2'
// })

// const graphql = {
//   getPrices: (token, timestamps) => client.post(
//     '',
//     {
//       query: `query ($token: String!, $timestamps: [Int!]) {
//         tokenDayDatas(where: {token: $token, date_in: $timestamps}) {
//           priceUSD
//           date
//         }
//       }
//       `,
//       variables: { token, timestamps },
//       headers: {
//         "Access-Control-Allow-Origin": "*"
//       },
//     }
//   ),
//   getInfo: (token) => client.post(
//     '',
//     {
//       query: `query ($token: String!) {
//         tokenDayDatas(first: 1, orderBy: date, orderDirection: desc, where: {token: $token}) {
//           dailyVolumeUSD
//           totalLiquidityUSD
//         }
//       }
//       `,
//       variables: { token },
//       headers: {
//         "Access-Control-Allow-Origin": "*"
//       },
//     }
//   ),
//   getTrasactions: (token, first) => client.post(
//     '', {
//     query: `query ($token: String, $first: Int) {
//         swaps(first: $first,
//           orderBy: timestamp,
//           orderDirection: desc,
//           where: {
//             token0: $token
//             token1: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"
//           }) {
//           timestamp
//           token0 {
//             symbol
//             id
//             name
//           }
//           token1 {
//             symbol
//             id
//             name
//           }
//           amount0In
//           amount1In
//           amount0Out
//           amount1Out
//           amountUSD
//           transaction {
//             id
//           }
//         }
//       }
//       `,
//     variables: { token, first },
//     headers: {
//       "Access-Control-Allow-Origin": "*"
//     },
//   }),
//   searchTokens: (search, first) => client.post(
//     '', {
//     query: `query ($search: String, $first: Int) {
//       tokens(first: $first, orderBy: tradeVolumeUSD, orderDirection: desc, where: {symbol_starts_with: $search}) {
//         name
//         symbol
//       }
//     }
//     `,
//     variables: { search, first },
//     headers: {
//       "Access-Control-Allow-Origin": "*"
//     },
//   })
// }

// /**
//  * @typedef {Object} TokenPrice
//  * @property {number} d0 price today
//  * @property {number} d1 price yesterday
//  * @property {number} d7 price a week ago
//  * @property {number} d30 price a month ago
//  * @property {number} d365 price a year ago
//  */

// /**
//  * @typedef {Object} TokenInfo
//  * @property {number} volume daily volume for today in USD
//  * @property {number} liquidity total liquidity in USD
//  */


// /**
//  * 
//  * @param {string} token token address 
//  * @returns {TokenPrice}
//  * @example
//  * const prices = await getTokenPrices("0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82")
//  * @example
//  * {
//  *  d30: 15.990570561736304,
//  *  d7: 25.145714905730355,
//  *  d1: 25.273658030601776,
//  *  d0: 24.61794076569993
//  * }
//  */
// export const getTokenPrices = async (token) => {
//   const current = new Date().getTime() / 1000

//   const secsInDay = 60 * 60 * 24
//   const d0 = Math.floor(current / secsInDay) * secsInDay
//   const d1 = d0 - secsInDay
//   const d7 = d0 - (secsInDay * 7)
//   const d30 = d0 - (secsInDay * 30)
//   const d365 = d0 - (secsInDay * 365)

//   const response = await graphql.getPrices(token, [
//     d0,
//     d1,
//     d7,
//     d30,
//     d365
//   ])

//   const prices = {}

//   if (response &&
//     response.data &&
//     response.data.data &&
//     response.data.data.tokenDayDatas) {
//     response.data.data.tokenDayDatas.forEach((item) => {
//       if (item.date == d0) prices.d0 = Number(item.priceUSD)
//       else if (item.date == d1) prices.d1 = Number(item.priceUSD)
//       else if (item.date == d7) prices.d7 = Number(item.priceUSD)
//       else if (item.date == d30) prices.d30 = Number(item.priceUSD)
//       else if (item.date == d365) prices.d365 = Number(item.priceUSD)
//     })
//   }

//   console.log(prices)

//   return prices
// }

// /**
//  * 
//  * @param {string} token token address 
//  * @returns {TokenInfo}
//  * @example
//  * const info = await getTokenInfo("0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82")
//  * @example
//  * {
//  *  volume: 13848938.290100127,
//  *  liquidity: 536478941.730173
//  * }
//  */
// const getTokenInfo = async (token) => {
//   const response = await graphql.getInfo(token)

//   const info = {}

//   if (response &&
//     response.data &&
//     response.data.data &&
//     response.data.data.tokenDayDatas &&
//     response.data.data.tokenDayDatas[0]) {
//     const data = response.data.data.tokenDayDatas[0]

//     info.volume = Number(data.dailyVolumeUSD)
//     info.liquidity = Number(data.totalLiquidityUSD)
//   }

//   console.log(info)

//   return info
// }

// const getTrasactions = async (token) => {
//   const response = await graphql.getTrasactions(token, 10)

//   let transactions = []

//   if (response &&
//     response.data &&
//     response.data.data &&
//     response.data.data.swaps) {
//     transactions = response.data.data.swaps.map((swap) => {
//       const transaction = {}

//       const amount0 = Math.abs(swap.amount0In - swap.amount0Out)
//       const amount1 = Math.abs(swap.amount1In - swap.amount1Out)
//       const priceInWBNB = amount1 / amount0
//       const priceInUSD = (swap.amountUSD / amount1) * priceInWBNB

//       transaction.type = swap.amount0In > swap.amount0Out ? 'Buy' : 'Sell'
//       transaction.time = new Date(Number(swap.timestamp) * 1000)
//       transaction.id = swap.transaction.id
//       transaction.amount = amount0
//       transaction.amountInUSD = (amount0 * priceInUSD)
//       transaction.priceInUSD = priceInUSD

//       return transaction
//     })

//     console.log(transactions)

//     return transactions
//   }
// }

// export const searchTokens = async (search) => {
//   const response = await graphql.searchTokens(search, 5)

//   let tokens = [];
//   if (response &&
//     response.data &&
//     response.data.data &&
//     response.data.data.tokens) tokens = response.data.data.tokens

//   console.log(tokens, `---> tokens`)

//   return tokens
// }

// // getTrasactions("0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82")

// // searchTokens('ALICE')
