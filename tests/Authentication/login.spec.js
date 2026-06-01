
const { test, expect } = require('@playwright/test');
const LoginPage = require('../../POM/login.js');
require('dotenv').config();

test.describe('Login Tests', () => {
    // ================================
    // LOGIN-01 valid Login
    // ================================

    test('LOGIN-01 valid Login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        await loginPage.login(process.env.EMAIL, process.env.PASSWORD);

        await page.waitForTimeout(3000);

        await expect(page.locator('text=Logged in as')).toBeVisible();

    });
    // ================================
    // LOGIN-02 invalid password
    // ================================

    test('LOGIN-02 invalid password', async ({ page }) => {

        const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        await loginPage.login(process.env.EMAIL, 'wrongpassword');
        await expect(page.locator('text=Your email or password is incorrect!')).toBeVisible();

    });

    // ================================
    // LOGIN-03 empty credentials
    // ================================

    test('LOGIN-03 empty credentials', async ({ page }) => {

        const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        await loginPage.login('', '');
        await expect(page.locator('input[data-qa="login-email"]')).toBeVisible();

    });


    // ================================
    // LOGIN-04 invalid email format
    // ================================
    const invalidEmails = [
        'rahulgmail.com',
        'rahul@gmail',
        '@gmail.com',
        'rahul@.com',
        'rahul.com',
        'rahul@@gmail.com',
        'rahul gmail@gmail.com',
        'rahul#gmail.com'];

    invalidEmails.forEach(email => {
        test('LOGIN-04 invalid email format' + email, async ({ page }) => {

            const loginPage = new LoginPage(page);
            await loginPage.gotoLoginPage();
            await page.waitForTimeout(3000);
            await loginPage.login(email, process.env.PASSWORD);

            await expect(page).toHaveURL('https://automationexercise.com/login', { timeout: 10000 });
        });
    });
    // ================================
    // LOGIN-05 login email field visible
    // ================================

    test('LOGIN-05 login email field visible', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.gotoLoginPage();

        await expect(page.locator('input[data-qa="login-email"]')).toBeVisible();

    });

    // ================================
    // LOGIN-06 login password field visible
    // ================================

    test('LOGIN-06 login password field visible', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.gotoLoginPage();

        await expect(page.locator('input[data-qa="login-password"]')).toBeVisible();

    });
    // ================================
    // LOGIN-07 verify logout button visible
    // ================================

    test('LOGIN-07 verify logout button visible', async ({ page }) => {

        const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        await loginPage.login(process.env.EMAIL, process.env.PASSWORD);
        await expect(page.locator('a[href="/logout"]')).toBeVisible();

    });

    // ================================
    // LOGIN-08 verify Sucessfull logout 
    // ================================

    test('LOGIN-08 verify Sucessfull logout', async ({ page }) => {

        const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        await loginPage.login(process.env.EMAIL, process.env.PASSWORD);
        await loginPage.logout();
        await expect(page).toHaveURL('https://automationexercise.com/login');

    });
});