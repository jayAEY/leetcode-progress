// function maxProfit(prices: number[]): number {
function maxProfit(prices) {
  let sorted = prices.toSorted();
  let lowest = sorted[0];
  let highest = sorted[sorted.length - 1];
  let lowestIndex = prices.indexOf(lowest);
  let highestIndex = prices.indexOf(highest);
  if (highestIndex > lowestIndex) {
    return highest - lowest;
  }
  return 0;
}

let first = { prices: [7, 1, 5, 3, 6, 4] };
let second = { prices: [7, 6, 4, 3, 1] };

console.log(maxProfit(first.prices));
console.log(maxProfit(second.prices));

// node 121-best-time-to-buy-and-sell-stock.ts
