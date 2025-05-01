const { test, expect } = require('@playwright/test');
const { SaucePage } = require('../pages/saucePage');
const { LoginPage } = require('../pages/LoginPage');
const { ProductPage } = require('../pages/ProductPage');
const { CartPage } = require('../pages/CartPage');
const userData = require('../../test-data/users.json');

test.describe('Sauce  Checkout Flow', () => {
  let loginPage;  // lowercase instance name
  let productPage;
  let cartPage;
  let saucePage;

  test.beforeEach(async ({ page }) => {
    // Initialize all page objects
    loginPage = new LoginPage(page, expect);
    productPage = new ProductPage(page, expect);
    cartPage = new CartPage(page, expect);
    saucePage = new SaucePage(page, expect);
    
    await loginPage.navigate();
    await loginPage.login(userData.standardUser.username, userData.standardUser.password);
  });

  test('Checkout flow of sauce Lab', async () => {
    await productPage.sortByPriceHighToLow();
    await productPage.verifyPricesSortedHighToLow();
 
    await cartPage.addThreeCheapestProducts();
    await cartPage.openCart();
    await cartPage.removeCheapestItem();

    await saucePage.enterCheckoutInfo('Kavuri', 'Karthikeyan', '12345');
    await saucePage.completePurchase();
  });
});