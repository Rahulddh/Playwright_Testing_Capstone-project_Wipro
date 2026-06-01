
const { test, expect } = require('@playwright/test');
const  LoginPage  = require('../../POM/login.js');
const  {SearchPage}  = require('../../POM/search.js');
const { CartPage } = require('../../POM/cart.js');
require('dotenv').config();

test.describe('Cart Module Tests', () => {
  let loginPage;
  let cartPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    cartPage = new CartPage(page);

    // Perform login first
    await loginPage.gotoLoginPage();
    await loginPage.login(process.env.EMAIL, process.env.PASSWORD);

    // Navigate to products page after login
    await cartPage.goToProductsPage();
  });

  // ================================
  // CART-01 Verify products page opens
  // ================================
  test('CART-01 Verify products page opens', async ({ page }) => {
    await expect(page).toHaveURL(/products/);
  });

  // ================================
  // CART-02 Verify cart icon visible
  // ================================
  test('CART-02 Verify cart icon visible', async () => {
    await expect(cartPage.cartBtn).toBeVisible();
  });

  // ================================
  // CART-03 Verify products button visible
  // ================================
  test('CART-03 Verify products button visible', async () => {
    await expect(cartPage.productsBtn).toBeVisible();
  });

  // ================================
  // CART-04 Verify cart page opens
  // ================================
  test('CART-04 Verify cart page opens', async ({ page }) => {
    await cartPage.openCart();
    await expect(page).toHaveURL(/view_cart/);
  });

  // ================================
  // CART-05 Verify body visible on cart page
  // ================================
  test('CART-05 Verify body visible on cart page', async ({ page }) => {
    await cartPage.openCart();
    await expect(page.locator('body')).toBeVisible();
  });

  // ================================
  // CART-06 Verify page contains cart text
  // ================================
  test('CART-06 Verify page contains cart text', async ({ page }) => {
    await cartPage.openCart();
    await expect(page.locator('body')).toContainText('Cart');
  });

  // ================================
  // CART-07 Verify product page navigation
  // ================================
  test('CART-07 Verify product page navigation', async ({ page }) => {
    await cartPage.goToProductsPage();
    await expect(page).toHaveURL(/products/);
  });

  // ================================
  // CART-08 Verify cart button navigation
  // ================================
  test('CART-08 Verify cart button navigation', async ({ page }) => {
    await cartPage.openCart();
    await expect(page).toHaveURL(/view_cart/);
  });

  // ================================
  // CART-09 Verify page title contains automation
  // ================================
  test('CART-09 Verify page title contains automation', async ({ page }) => {
    await expect(page).toHaveTitle(/Automation/);
  });

  // ================================
  // CART-10 Verify current url contains automation exercise
  // ================================
  test('CART-10 Verify current url contains automation exercise', async ({ page }) => {
    expect(page.url()).toContain('automationexercise');
  });

  // ================================
  // CART-11 Verify cart page url
  // ================================
  test('CART-11 Verify cart page url', async ({ page }) => {
    await cartPage.openCart();
    expect(page.url()).toContain('view_cart');
  });

  // ================================
  // CART-12 Verify products url
  // ================================
  test('CART-12 Verify products url', async ({ page }) => {
    await cartPage.goToProductsPage();
    expect(page.url()).toContain('products');
  });

  // ================================
  // CART-13 Verify cart button enabled
  // ================================
  test('CART-13 Verify cart button enabled', async () => {
    await expect(cartPage.cartBtn).toBeEnabled();
  });

  // ================================
  // CART-14 Verify products button enabled
  // ================================
  test('CART-14 Verify products button enabled', async () => {
    await expect(cartPage.productsBtn).toBeEnabled();
  });

  // ================================
  // CART-15 Verify page loaded successfully
  // ================================
  test('CART-15 Verify page loaded successfully', async ({ page }) => {
    await expect(page.locator('body')).toBeVisible();
  });

});
