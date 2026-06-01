// @ts-check
const { test, expect } = require('@playwright/test');
const SignupPage = require('../../POM/signup.js');

test.describe('Signup Tests', () => {

    // ================================
    // AUTH-01 Signup with valid data
    // ================================

    test('AUTH-01 Signup with valid data', async ({ page }) => {

        const signupPage = new SignupPage(page);

        await signupPage.gotoSignupPage();

        await signupPage.signup('Rahul',`rahul${Date.now()}@gmail.com`);

        await expect(page.locator('text=Enter Account Information')).toBeVisible();

    });

    // ================================
    // AUTH-02 Mandatory fields validation
    // ================================

        test('AUTH-02 Mandatory fields validation', async ({ page }) => {
        const signupPage = new SignupPage(page);
        await signupPage.gotoSignupPage();
        await signupPage.signup('Rahul',`rahul${Date.now()}@gmail.com`);
        await expect(page.locator('text=Enter Account Information')).toBeVisible();
        await page.locator('button[data-qa="create-account"]').click();
        await expect(page.locator('text=Enter Account Information')).toBeVisible();

    });

});