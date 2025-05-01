class SaucePage {
    constructor(page, expect) {
      this.page = page;
      this.expect = expect;
      
    //   // Login page elements
    //   this.usernameInput = page.locator('#user-name');
    //   this.passwordInput = page.locator('#password');
    //   this.loginButton = page.locator('#login-button');
      
    //   // Product page elements
    //   this.sortDropdown = page.locator('.product_sort_container');
    //   this.inventoryItems = page.locator('.inventory_item');
    //   this.inventoryItemPrices = page.locator('.inventory_item_price');
    //   this.addToCartButtons = page.locator('button:has-text("Add to cart")');
      
    //   // Cart elements
    //   this.cartBadge = page.locator('.shopping_cart_badge');
    //   this.cartLink = page.locator('.shopping_cart_link');
    //   this.cartItems = page.locator('.cart_item');
    //   this.removeButtons = page.locator('button:has-text("Remove")');
      
      // Checkout elements
      this.checkoutButton = page.locator('#checkout');
      this.firstNameInput = page.locator('#first-name');
      this.lastNameInput = page.locator('#last-name');
      this.postalCodeInput = page.locator('#postal-code');
      this.continueButton = page.locator('#continue');
      this.finishButton = page.locator('#finish');
      this.completeHeader = page.locator('.complete-header');
    }
  
    // // Navigation
    // async navigate() {
    //   await this.page.goto('/');
    // }
  
    // // Authentication
    // async login(username, password) {
    //   await this.usernameInput.fill(username);
    //   await this.passwordInput.fill(password);
    //   await this.loginButton.click();
    // }
  
    // // Product Sorting
    // async sortByPriceHighToLow() {
    //   await this.sortDropdown.selectOption('hilo');
    //   await this.page.waitForTimeout(500);
    // }
  
    // async sortByPriceLowToHigh() {
    //   await this.sortDropdown.selectOption('lohi');
    //   await this.page.waitForTimeout(500);
    // }
  
    // // Price Verification
    // async verifyPricesSortedHighToLow() {
    //   const prices = await this.getAllPrices();
    //   for (let i = 0; i < prices.length - 1; i++) {
    //     this.expect(prices[i]).toBeGreaterThanOrEqual(prices[i + 1]);
    //   }
    // }
  
    // async getAllPrices() {
    //   const priceElements = await this.inventoryItemPrices.all();
    //   return Promise.all(priceElements.map(async (element) => {
    //     const priceText = await element.textContent();
    //     return parseFloat(priceText.replace('$', ''));
    //   }));
    // }
  
    // // Cart Operations
    // async addThreeCheapestProducts() {
    //   await this.sortByPriceLowToHigh();
    //   const addButtons = await this.addToCartButtons.all();
    //   for (let i = 0; i < 3; i++) {
    //     await addButtons[i].click();
    //   }
    // }
  
    // async openCart() {
    //   await this.cartLink.click();
    // }
  
    // async removeCheapestItem() {
    //   const removeButtons = await this.removeButtons.all();
    //   await removeButtons[removeButtons.length - 1].click();
    // }
  
    // Checkout Process
    async enterCheckoutInfo(firstName, lastName, postalCode) {
      await this.checkoutButton.click();
      await this.firstNameInput.fill(firstName);
      await this.lastNameInput.fill(lastName);
      await this.postalCodeInput.fill(postalCode);
      await this.continueButton.click();
    }
  
    async completePurchase() {
      await this.finishButton.click();
      await this.expect(this.completeHeader).toHaveText('Thank you for your order!');
    }
  
    // async getCartItemCount() {
    //   return parseInt(await this.cartBadge.textContent());
    // }
  }
  
  module.exports = { SaucePage };