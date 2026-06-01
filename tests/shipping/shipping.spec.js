const { test, expect } = require('@playwright/test');
const LoginPage = require('../../POM/login.js');
const { CartPage } = require('../../POM/cart.js');
const { SearchPage } = require('../../POM/search.js');
const { ShippingPage } = require('../../POM/shipping.js');
require('dotenv').config();

test.describe('Shipping Address Module', () => {
  let loginPage, cartPage, searchPage, shippingPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    cartPage = new CartPage(page);
    searchPage = new SearchPage(page);
    shippingPage = new ShippingPage(page);

    // Login first
    await loginPage.gotoLoginPage();
    await loginPage.login(process.env.EMAIL, process.env.PASSWORD);
  });

  // ================================
  // SHIPPING-01 Verify cart page opens
  // ================================
  test('SHIPPING-01 Verify cart page opens', async ({ page }) => {
    await shippingPage.openCartPage();
    await expect(page.url()).toContain('view_cart');
  });

  // SHIPPING-02 Verify products page opens
  test('SHIPPING-02 Verify products page opens', async ({ page }) => {
    await shippingPage.openProductsPage();
    await expect(page.url()).toContain('products');
  });

  // SHIPPING-03 Verify cart page body visible
  test('SHIPPING-03 Verify cart page body visible', async () => {
    await shippingPage.openCartPage();
    await expect(shippingPage.body).toBeVisible();
  });

  // SHIPPING-04 Verify delivery address section locator created
  test('SHIPPING-04 Verify delivery address section locator created', async () => {
    await expect(shippingPage.deliveryAddress).toBeHidden();
  });

  // SHIPPING-05 Verify billing address section locator created
  test('SHIPPING-05 Verify billing address section locator created', async () => {
    await expect(shippingPage.billingAddress).toBeHidden();
  });

  // SHIPPING-06 Verify comment box locator created
  test('SHIPPING-06 Verify comment box locator created', async () => {
    await expect(shippingPage.commentBox).toBeHidden();
  });

  // SHIPPING-07 Verify place order button locator created
  test('SHIPPING-07 Verify place order button locator created', async () => {
    await expect(shippingPage.placeOrderBtn).toBeHidden();
  });

  // SHIPPING-08 Verify review order section locator created
  test('SHIPPING-08 Verify review order section locator created', async () => {
    await expect(shippingPage.reviewOrderSection).toBeHidden();
  });

  // SHIPPING-09 Verify body visible
  test('SHIPPING-09 Verify body visible', async () => {
    await expect(shippingPage.body).toBeVisible();
  });

  // SHIPPING-10 Verify shipping flow navigation
  test('SHIPPING-10 Verify shipping flow navigation', async ({ page }) => {
    await shippingPage.openProductsPage();
    await shippingPage.openCartPage();
    await expect(page.url()).toContain('view_cart');
  });

  // SHIPPING-11 Verify products button visible
  test('SHIPPING-11 Verify products button visible', async () => {
    await expect(shippingPage.productsBtn).toBeVisible();
  });

  // SHIPPING-12 Verify cart button visible
  test('SHIPPING-12 Verify cart button visible', async () => {
    await expect(shippingPage.cartBtn).toBeVisible();
  });

  // SHIPPING-13 Verify products button enabled
  test('SHIPPING-13 Verify products button enabled', async () => {
    await expect(shippingPage.productsBtn).toBeEnabled();
  });

  // SHIPPING-14 Verify cart button enabled
  test('SHIPPING-14 Verify cart button enabled', async () => {
    await expect(shippingPage.cartBtn).toBeEnabled();
  });

  // SHIPPING-15 Verify products page body visible
  test('SHIPPING-15 Verify products page body visible', async () => {
    await shippingPage.openProductsPage();
    await expect(shippingPage.body).toBeVisible();
  });

  // SHIPPING-16 Verify cart page url contains view cart
  test('SHIPPING-16 Verify cart page url contains view cart', async ({ page }) => {
    await shippingPage.openCartPage();
    await expect(page.url()).toContain('view_cart');
  });

  // SHIPPING-17 Verify current url contains automationexercise
  test('SHIPPING-17 Verify current url contains automationexercise', async ({ page }) => {
    expect(page.url()).toContain('automationexercise');
  });

  // SHIPPING-18 Verify page title contains automation
  test('SHIPPING-18 Verify page title contains automation', async ({ page }) => {
    await expect(page).toHaveTitle(/Automation/);
  });

  // SHIPPING-19 Verify footer visible
  test('SHIPPING-19 Verify footer visible', async () => {
    await expect(shippingPage.footer).toBeVisible();
  });

  // SHIPPING-20 Verify subscription section visible
  test('SHIPPING-20 Verify subscription section visible', async () => {
    await expect(shippingPage.subscriptionText).toContainText('Subscription');
  });
});
