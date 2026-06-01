const { test, expect } = require('@playwright/test');
const LoginPage = require('../../POM/login.js');
const { HomePage } = require('../../POM/home.js');
require('dotenv').config();

test.describe('Home Page Tests', () => {
    let loginPage;
    let homePage;   

    test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);

    // Login first
    await loginPage.gotoLoginPage();
    await loginPage.login(process.env.EMAIL, process.env.PASSWORD);
  });

    // ================================
    // HOME-01 Verify home page visible successfully
    // ================================
    test('HOME-01 Verify home page visible successfully', async ({ page }) => {
        await expect(page.locator('body')).toContainText('Home');
     });

    // ================================
    // HOME-02 Verify logout button visible
    // ================================
    test('HOME-02 Verify logout button visible', async () => {
        await expect(homePage.logoutBtn).toBeVisible();
     });

    // ================================
    // HOME-03 Verify delete account button visible
    // ================================
    test('HOME-03 Verify delete account button visible', async () => {
        await expect(homePage.deleteaccountBtn).toBeVisible();
     });
    
    // ================================
    // HOME-04 Verify home page button visible
    // ================================
    test('HOME-04 Verify home page button visible', async () => {
        await expect(homePage.homeBtn).toBeVisible();
     });

    // ================================
    // HOME-05 Verify API list button visible
    // ================================
    test('HOME-05 Verify API list button visible', async () => {
        await expect(homePage.apilistBtn).toBeVisible();
     });
    
    // ================================
    // HOME-06 Verify Product button visible
    // ================================
    test('HOME-06 Verify Product button visible', async () => {
        await expect(homePage.productsBtn).toBeVisible();
     });
    
    // ================================
    // HOME-07 Verify cart button visible
    // ================================
    test('HOME-07 Verify cart button visible', async () => {
        await expect(homePage.cartBtn).toBeVisible();
     });
    
    // ================================
    // HOME-08 Verify Test Cases button visible
    // ================================
    test('HOME-08 Verify Test Cases button visible', async () => {
        await expect(homePage.testcasesBtn).toBeVisible();
     });

    // ================================
    // HOME-09 Verify Video Tutorials button visible
    // ================================
    test('HOME-09 Verify Video Tutorials button visible', async () => {
        await expect(homePage.videoBtn).toBeVisible();
     });

    // ================================
    // HOME-10 Verify Contact Us button visible
    // ================================
    test('HOME-10 Verify Contact Us button visible', async () => {
        await expect(homePage.contactBtn).toBeVisible();
     });
    
    // ================================
    // HOME-11 Verify Logo visible
    // ================================
    test('HOME-11 Verify Logo visible', async () => {
        await expect(page.locator('img[src="/static/images/home/logo.png"]')).toBeVisible();
     });
    
    // ================================
    // HOME-12 Verify Left Arrow visible
    // ================================
    test('HOME-12 Verify Left Arrow visible', async () => {
        await expect(page.locator('.fa.fa-angle-left')).toBeVisible();
     });

    // ================================
    // HOME-13 Verify Right Arrow visible
    // ================================
    test('HOME-13 Verify Right Arrow visible', async () => {
        await expect(page.locator('.fa.fa-angle-right')).toBeVisible();
     });

    // ================================
    // HOME-14 Verify Category visible
    // ================================
    test('HOME-14 Verify Category visible', async () => {
        await expect(page.locator('body')).toContainText(/Category/i);
     });
    
    // ================================
    // HOME-15 Verify Feature Items visible
    // ================================
    test('HOME-15 Verify Feature Items visible', async () => {
        await expect(page.locator('.title.text-center')).toContainText(/Features Items/i);
     });
    
    // ================================
    // HOME-16 Verify Brand visible
    // ================================
    test('HOME-16 Verify Brand visible', async () => {
        await expect(page.locator('.brands_products')).toContainText(/Brands/i);
     });
});
