// eval the highest price
// eval the lowest price
// keep track the minute

const stockPrices = [10, 12, 7, 5, 8, 11];

function getMaxProfit(prices) {
  const high = {
    price: prices[0],
    minute: 0,
  };
  const low = {
    price: prices[0],
    minute: prices.length,
  };

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] <= low.price) {
      low.price = prices[i];
      low.minute = i;
    }
    if (prices[i] >= high.price && high.minute <= low.minute) {
      high.price = prices[i];
      high.minute = i;
    } else if (high.minute >= high.minute) {
      high.price = prices[i];
      high.minute = i;
    }
  }
  console.log(high.price - low.price);
}

// for (let j = 0; j <= prices.length; j++) {}
getMaxProfit(stockPrices);
