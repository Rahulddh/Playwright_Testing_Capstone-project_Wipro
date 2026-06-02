class HomePage {

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
        this.productsBtn = page.locator("a[href='/products']").first();
        this.cartBtn = page.locator("a[href='/view_cart']").first();
        this.homeBtn = page.locator("a[href='/']").first();
        this.contactBtn = page.locator("a[href='/contact_us']").first();
        this.loginBtn = page.locator("a[href='/login']").first();
        this.logoutBtn = page.locator("a[href='/logout']").first();
        this.deleteaccountBtn = page.locator("a[href='/delete_account']").first();
        this.testcasesBtn = page.locator("a[href='/test_cases']").first();
        this.apiBtn = page.locator("a[href='/api_list']").first();
        this.videoBtn = page.locator("a[href='https://www.youtube.com/c/AutomationExercise']").first();
        this.logo = page.locator('.logo.pull-left');
        this.nextSlideBtn = page.locator('[data-slide="next"]').first();
        this.prevSlideBtn = page.locator('[data-slide="prev"]').first();
    }


}

module.exports = { HomePage };