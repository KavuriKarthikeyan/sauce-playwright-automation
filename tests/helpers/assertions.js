function assertSortedHighToLow(prices) {
    for (let i = 0; i < prices.length - 1; i++) {
      expect(prices[i], `Price at index ${i} (${prices[i]}) should be >= price at index ${i+1} (${prices[i+1]})`).toBeGreaterThanOrEqual(prices[i + 1]);
    }
  }
  
  module.exports = { assertSortedHighToLow };