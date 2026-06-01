class CheckoutPage {
  constructor(page) {
    this.page = page;

    // Navigation
    this.productsBtn = page.locator("a[href='/products']").first();
    this.cartBtn = page.locator("a[href='/view_cart']").first();
    this.homeBtn = page.locator("a[href='/']").first();
    this.contactBtn = page.locator("a[href='/contact_us']").first();
    this.logoutBtn = page.locator("a[href='/logout']").first();

    // Common Elements
    this.body = page.locator('body');
    this.footer = page.locator('footer');
    this.subscriptionText = page.locator('body');
  }

  async goToProductsPage() {
    await this.productsBtn.click();
  }

  async openCart() {
    await this.cartBtn.click();
  }

  async openHomePage() {
    await this.homeBtn.click();
  }

  async openContactPage() {
    await this.contactBtn.click();
  }

  async openLoginPage() {
    await this.loginBtn.click();
  }
}

module.exports = { CheckoutPage };
