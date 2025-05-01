class CartPage {
    constructor(page, expect) {
      this.page = page;
      this.expect = expect;
      
      // Cart elements
      this.cartBadge = page.locator('.shopping_cart_badge');
      this.cartLink = page.locator('.shopping_cart_link');
      this.cartItems = page.locator('.cart_item');
      this.removeButtons = page.locator('button:has-text("Remove")');
      
      // Product elements needed for adding items
      this.sortDropdown = page.locator('.product_sort_container');
      this.addToCartButtons = page.locator('button:has-text("Add to cart")');
      this.productPrices = page.locator('.inventory_item_price');
    }
  
    // Sorting method needed for adding cheapest products
    async sortByPriceLowToHigh() {
      await this.sortDropdown.selectOption('lohi');
      await this.page.waitForTimeout(300);
    }
  
    // Cart Operations
    async addThreeCheapestProducts() {
      await this.sortByPriceLowToHigh();
      const addButtons = await this.addToCartButtons.all();
      for (let i = 0; i < 3; i++) {
        await addButtons[i].click();
      }
      await this.expect(this.cartBadge).toHaveText('3');
    }
  
    async openCart() {
      await this.cartLink.click();
      await this.expect(this.page).toHaveURL(/cart.html/);
    }
  
    async removeCheapestItem() {
      const removeButtons = await this.removeButtons.all();
      await removeButtons[removeButtons.length - 1].click();
    }
  
    async getCartItemCount() {
      const countText = await this.cartBadge.textContent();
      return parseInt(countText);
    }
  }
  
  module.exports = { CartPage };