class SignupPage {

    constructor(page) {
        this.page = page;

        this.name = page.locator('input[data-qa="signup-name"]');
        this.email = page.locator('input[data-qa="signup-email"]');
        this.signupBtn = page.locator('button[data-qa="signup-button"]');
    }

    async gotoSignupPage() {
        await this.page.goto('https://automationexercise.com/login');
    }

    async signup(name, email) {
        await this.name.fill(name);
        await this.email.fill(email);
        await this.signupBtn.click();
    }
}

module.exports = SignupPage;