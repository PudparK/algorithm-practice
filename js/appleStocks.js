// eval the highest price
// eval the lowest price
// keep track the minute

const stockPrices = [10, 12, 7, 5, 8, 11];

function getMaxProfit(prices) {
  let high = {
    price: prices[0],
    minute: 0
  };
  let low = {
    price: prices[0],
    minute: 0
  };

  for (let i = 0; i < prices.length; i++) {
    for (let j = 0; j < prices.length; j++) {
      if (high.price > prices[j] && j > i) {
        high.price = prices[j];
        high.minute = j;
      }
      if (low.price < prices[j] && j > i) {
        low.price = prices[j];
        low.minute = j;
      }
    }
  }
  console.log('high', high);
  console.log('low', low);
}

getMaxProfit(stockPrices);