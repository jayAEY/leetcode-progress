// function maxProfit(prices: number[]): number {
function maxProfit(prices) {
  let profit = 0;
  let buyPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    prices[i] < buyPrice
      ? (buyPrice = prices[i])
      : (profit = Math.max(prices[i] - buyPrice, profit));
  }
  return profit;
}

let first = { prices: [7, 1, 5, 3, 6, 4] };
let second = { prices: [7, 6, 4, 3, 1] };
let third = { prices: [2, 4, 1] };

console.log(maxProfit(first.prices));
console.log(maxProfit(second.prices));
console.log(maxProfit(third.prices));

// node 121-best-time-to-buy-and-sell-stock.ts
