class ProductPage {
    constructor(page, expect) {
      this.page = page;
      this.expect = expect;
      
   
      // Product page elements
      this.sortDropdown = page.locator('.product_sort_container');
      this.inventoryItems = page.locator('.inventory_item');
      this.inventoryItemPrices = page.locator('.inventory_item_price');
      this.addToCartButtons = page.locator('button:has-text("Add to cart")');
    }
     
    // Product Sorting
    async sortByPriceHighToLow() {
        await this.sortDropdown.selectOption('hilo');
        await this.page.waitForTimeout(500);
      }
    
    async sortByPriceLowToHigh() {
        await this.sortDropdown.selectOption('lohi');
        await this.page.waitForTimeout(500);
      }

      // Price Verification
    async verifyPricesSortedHighToLow() {
        const prices = await this.getAllPrices();
        for (let i = 0; i < prices.length - 1; i++) {
          this.expect(prices[i]).toBeGreaterThanOrEqual(prices[i + 1]);
        }
      }
    
      async getAllPrices() {
        const priceElements = await this.inventoryItemPrices.all();
        return Promise.all(priceElements.map(async (element) => {
          const priceText = await element.textContent();
          return parseFloat(priceText.replace('$', ''));
        }));
      }
    }

    module.exports = { ProductPage };  