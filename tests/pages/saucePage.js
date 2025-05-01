class SaucePage {
    constructor(page, expect) {
      this.page = page;
      this.expect = expect;
      
      
      // Checkout elements
      this.checkoutButton = page.locator('#checkout');
      this.firstNameInput = page.locator('#first-name');
      this.lastNameInput = page.locator('#last-name');
      this.postalCodeInput = page.locator('#postal-code');
      this.continueButton = page.locator('#continue');
      this.finishButton = page.locator('#finish');
      this.completeHeader = page.locator('.complete-header');
    }
    
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

  }
  
  module.exports = { SaucePage };