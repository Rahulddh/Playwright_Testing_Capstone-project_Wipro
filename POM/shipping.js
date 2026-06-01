class ShippingPage {
  constructor(page) {
    this.page = page;

    // Navigation
    this.cartBtn = page.locator("a[href='/view_cart']").first();
    this.productsBtn = page.locator("a[href='/products']").first();

    // Shipping / Checkout Elements
    this.checkoutBtn = page.locator('a:has-text("Proceed To Checkout")');
    this.deliveryAddress = page.locator('#address_delivery');
    this.billingAddress = page.locator('#address_invoice');
    this.commentBox = page.locator('textarea[name="message"]');
    this.placeOrderBtn = page.locator('a:has-text("Place Order")');
    this.reviewOrderSection = page.locator('#cart_info');

    // Common Elements
    this.body = page.locator('body');
    this.footer = page.locator('footer');
    this.subscriptionText = page.locator('body');
  }

  async openProductsPage() {
    await this.productsBtn.click();
  }

  async openCartPage() {
    await this.cartBtn.click();
  }

  async proceedToCheckout() {
    await this.checkoutBtn.click();
  }

  async enterComment(message) {
    await this.commentBox.fill(message);
  }

  async placeOrder() {
    await this.placeOrderBtn.click();
  }
}

module.exports = { ShippingPage };
