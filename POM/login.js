class LoginPage {

    constructor(page) {
        this.page = page;

        // Locators
        this.email = page.locator('input[data-qa="login-email"]');
        this.password = page.locator('input[data-qa="login-password"]');
        this.loginBtn = page.locator('button[data-qa="login-button"]');

        this.logoutBtn = page.locator('a[href="/logout"]');
    }

    // Navigate to login page
    async gotoLoginPage() {
        await this.page.goto('https://automationexercise.com/login');
    }

    // Login action
    async login(email, password) {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.loginBtn.click();
    }

    // Logout action
    async logout() {
        await this.logoutBtn.click();
    }
}

module.exports = LoginPage;