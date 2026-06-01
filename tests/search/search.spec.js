const { test, expect } = require('@playwright/test');
const LoginPage = require('../../POM/login.js');
const { SearchPage } = require('../../POM/search.js');
require('dotenv').config();

test.describe('Product Module Tests', () => {
    let loginPage;
    let productPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        productPage = new SearchPage(page);
        await loginPage.gotoLoginPage();
        await loginPage.login(process.env.EMAIL, process.env.PASSWORD);
        await productPage.gotoProductsPage();

    });

    // ======================================
    // SEARCH-01 Verify Products Page Opens
    // ======================================
    test('SEARCH-01 Verify Products Page Opens', async ({ page }) => {

        await expect(page.locator('body')).toContainText('All Products');

    });

    // ======================================
    // SEARCH-02 Verify Search Input Visible
    // ======================================
    test('SEARCH-02 Verify Search Input Visible', async ({ page }) => {

        await expect(page.locator('#search_product')).toBeVisible();

    });

    // ======================================
    // SEARCH-03 Verify Search Button Visible
    // ======================================
    test('SEARCH-03 Verify Search Button Visible', async ({ page }) => {

        await expect(page.locator('#submit_search')).toBeVisible();

    });

    // ======================================
    // SEARCH-04 Verify Search Product
    // ======================================

    test(`SEARCH-04 Verify Search Product`, async ({ page }) => {

        await page.fill('#search_product', 'Top');
        await page.click('#submit_search');
        await expect(page.locator('body')).toContainText('Top');

    });

    // ======================================
    // SEARCH-05 Verify Image VIsible
    // ======================================
    test('SEARCH-05 Verify Image VIsible', async ({ page }) => {
        await page.fill('#search_product', 'Top');
        await page.click('#submit_search');
        await expect(page.locator('.product-image-wrapper').first()).toBeVisible();

    });

    // ======================================
    // SEARCH-06 Verify Price VIsible
    // ======================================
    
    test('SEARCH-06 Verify Price VIsible', async ({ page }) => {
        await page.fill('#search_product', 'Top');
        await page.click('#submit_search');
        await expect(page.locator('.product-image-wrapper').first()).toContainText('500');

    });

    // ======================================
    // SEARCH-07 Verify Text VIsible
    // ======================================
    test('SEARCH-07 Verify Text VIsible', async ({ page }) => {
        await page.fill('#search_product', 'Top');
        await page.click('#submit_search');
        await expect(page.locator('.product-image-wrapper').first()).toContainText('Blue Top');

    });

    // ======================================
    // SEARCH-08 Verify Add to Cart VIsible
    // ======================================
    test('SEARCH-08 Verify Add to Cart VIsible', async ({ page }) => {
        await page.fill('#search_product', 'Top');
        await page.click('#submit_search');
        await expect(page.locator('[data-product-id="1"]').first()).toContainText('Add to cart');

    });

    // ======================================
    // SEARCH-09 Verify Brands Section Visible
    // ======================================
    test('SEARCH-09 Verify Brands Section Visible', async ({ page }) => {

        await expect(page.locator('body')).toContainText('Brands');

    });

    // ======================================
    // SEARCH-10 Verify Women Category Visible
    // ======================================
    test('SEARCH-10 Verify Women Category Visible', async ({ page }) => {

        await expect(page.locator('body')).toContainText('Women');

    });

    // ======================================
    // SEARCH-11 Verify Kids Category Visible
    // ======================================
    test('SEARCH-11 Verify Kids Category Visible', async ({ page }) => {

        await expect(page.locator('body')).toContainText('Kids');

    });

    // ======================================
    // SEARCH-12 Verify Men Category Visible
    // ======================================
    test('SEARCH-12 Verify Men Category Visible', async ({ page }) => {

        await expect(page.locator('body')).toContainText('Men');

    });


    // ======================================
    // SEARCH-13 Verify first product visible
    // ======================================
    test('SEARCH-13 Verify first product visible', async ({ page }) => {

        await expect(page.locator('.product-image-wrapper').first()).toBeVisible();

    });

    // ======================================
    // SEARCH-14 Verify product details page opens
    // ======================================
    test('SEARCH-14 Verify product details page opens', async ({ page }) => {

        await page.locator('a[href*="/product_details/"]').first().click({ force: true });

        await expect(page.locator('body')).toContainText('Availability');

    });

    // ======================================
    // SEARCH-15 Verify Add To Cart
    // ======================================
        test('SEARCH-15 Verify Add To Cart', async ({ page }) => {

        await page.locator('.add-to-cart').first().click({ force: true });

        await expect(page.locator('body')).toContainText('Added!');

    });

    // ===========================================
    // SEARCH-16 Verify Continue Shopping Visible
    // ===========================================
    test('SEARCH-16 Verify Continue Shopping Visible', async ({ page }) => {

        await page.locator('.add-to-cart').first().click({ force: true });

        await expect(page.locator('.modal-content')).toContainText('Continue Shopping');

    });

    // ===========================================
    // SEARCH-17 Verify View Cart Visible
    // ===========================================
    test('SEARCH-17 Verify View Cart Visible', async ({ page }) => {

        await page.locator('.add-to-cart').first().click({ force: true });
        await expect(page.locator('.modal-content')).toContainText('View Cart');

    });

    

});