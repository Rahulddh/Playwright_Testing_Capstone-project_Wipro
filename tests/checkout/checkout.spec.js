const { test, expect } = require('@playwright/test');
const LoginPage = require('../../POM/login.js');
const { CartPage } = require('../../POM/cart.js');
const { SearchPage } = require('../../POM/search.js');
const { CheckoutPage } = require('../../POM/checkout.js');
require('dotenv').config();

test.describe('Checkout And Order Module', () => {
    let loginPage, cartPage, searchPage, checkoutPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        cartPage = new CartPage(page);
        searchPage = new SearchPage(page);
        checkoutPage = new CheckoutPage(page);

        // Login first
        await loginPage.gotoLoginPage();
        await loginPage.login(process.env.EMAIL, process.env.PASSWORD);
    });

    // ================================
    // CHECKOUT-01 Verify products button visible
    // ================================
    test('CHECKOUT-01 Verify products button visible', async () => {
        await expect(checkoutPage.productsBtn).toBeVisible();
    });

    // ================================
    // CHECKOUT-02 Verify cart page opens
    // ================================
    test('CHECKOUT-02 Verify cart page opens', async ({ page }) => {
        await checkoutPage.openCart();
        await expect(page).toHaveURL(/view_cart/);
    });

    // ================================
    // CHECKOUT-03 Verify footer visible
    // ================================
    test('CHECKOUT-03 Verify footer visible', async () => {
        await expect(checkoutPage.footer).toBeVisible();
    });

    // ================================
    // CHECKOUT-04 Verify products page opens
    // ================================
    test('CHECKOUT-04 Verify products page opens', async ({ page }) => {
        await checkoutPage.goToProductsPage();
        await expect(page).toHaveURL(/products/);
    });

    // ================================
    // CHECKOUT-05 Verify contact page navigation
    // ================================
    test('CHECKOUT-05 Verify contact page navigation', async ({ page }) => {
        await checkoutPage.openContactPage();
        await expect(page.url()).toContain('contact_us');
    });

    // ================================
    // CHECKOUT-06 Verify cart button enabled
    // ================================
    test('CHECKOUT-06 Verify cart button enabled', async () => {
        await expect(checkoutPage.cartBtn).toBeEnabled();
    });

    // ================================
    // CHECKOUT-07 Verify subscription text available
    // ================================
    test('CHECKOUT-07 Verify subscription text available', async () => {
        await expect(checkoutPage.subscriptionText).toContainText('Subscription');
    });

    // ================================
    // CHECKOUT-08 Verify home page navigation
    // ================================
    test('CHECKOUT-08 Verify home page navigation', async ({ page }) => {
        await checkoutPage.openHomePage();
        await expect(page.url()).toContain('automationexercise');
    });

    // ================================
    // CHECKOUT-09 Verify products button enabled
    // ================================
    test('CHECKOUT-09 Verify products button enabled', async () => {
        await expect(checkoutPage.productsBtn).toBeEnabled();
    });

    // ================================
    // CHECKOUT-10 Verify cart page contains cart text
    // ================================
    test('CHECKOUT-10 Verify cart page contains cart text', async () => {
        await checkoutPage.openCart();
        await expect(checkoutPage.body).toContainText('Cart');
    });

    // ================================
    // CHECKOUT-11 Verify page title contains automation
    // ================================
    test('CHECKOUT-11 Verify page title contains automation', async ({ page }) => {
        await expect(page).toHaveTitle(/Automation/);
    });

    // ================================
    // CHECKOUT-12 Verify body visible on products page
    // ================================
    test('CHECKOUT-12 Verify body visible on products page', async () => {
        await checkoutPage.goToProductsPage();
        await expect(checkoutPage.body).toBeVisible();
    });

    // ================================
    // CHECKOUT-13 Verify current url contains automationexercise
    // ================================
    test('CHECKOUT-13 Verify current url contains automationexercise', async ({ page }) => {
        expect(page.url()).toContain('automationexercise');
    });

    // ================================
    // CHECKOUT-14 Verify home button visible
    // ================================
    test('CHECKOUT-14 Verify home button visible', async () => {
        await expect(checkoutPage.homeBtn).toBeVisible();
    });

    // ================================
    // CHECKOUT-15 Verify contact button visible
    // ================================
    test('CHECKOUT-15 Verify contact button visible', async () => {
        await expect(checkoutPage.contactBtn).toBeVisible();
    });

    // ================================
    // CHECKOUT-16 Verify login button visible
    // ================================
    test('CHECKOUT-16 Verify login button visible', async () => {
        await expect(checkoutPage.loginBtn).toBeVisible();
    });

});
