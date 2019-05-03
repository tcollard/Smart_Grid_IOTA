const request = require('request-promise');
const IOTA = require('iota.lib.js');

const marketAddress = 'http://localhost:8080';

module.exports = function batteryFactory(seed, minimumProfit, storageCosts) {
  const iota = new  IOTA({
	provider: 'https://testnet140.tangle.works:443'
  });
  return {
    seed,
    batteryLevel: 0,
    lastTradedPrice: 0, // iota
    minimumProfit, // in percentage
    storageCosts, // percentage to simplify
    async trade() {
      console.log('actually doing things');
      const orderBook = await fetchOrderBook();
    },
  }
}

async function fetchOrderBook() {
  //const book =  await request.get(marketAddress + '/orderBook');
  const book = {
    asks: [
      {
        id: 0,
        type: 'sell',
        amount: 1,
        price: 0.15,
        walletAddress: 0,
        fillPercentage: 0,
      },
      {
        id: 1,
        type: 'sell',
        amount: 1,
        price: 0.13,
        walletAddress: 0,
        fillPercentage: 0,
      }
    ],
    bids: [
      {
        id: 0,
        type: 'buy',
        amount: 1,
        price: 0.15,
        walletAddress: 0,
        fillPercentage: 0,
      },
      {
        id: 1,
        type: 'buy',
        amount: 1,
        price: 0.13,
        walletAddress: 0,
        fillPercentage: 0,
      }
    ]
  }
  return book;
}
