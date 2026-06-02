class LoginPage {

    constructor(page) {
        this.page = page;

        // Block Google Ads and external trackers to prevent WebKit test failures and click interception
        page.route('**/*', (route) => {
            const url = route.request().url();
            if (url.includes('google') || url.includes('ads') || url.includes('doubleclick') || url.includes('analytics') || url.includes('adservice')) {
                route.abort();
            } else {
                route.continue();
            }
        }).catch(() => {});

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