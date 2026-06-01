class CartPage {

  constructor(page) {

    this.page = page;

    // Navigation
    this.productsBtn =
      page.locator("a[href='/products']").first();

    this.cartBtn =
      page.locator("a[href='/view_cart']").first();

  }

  async goToProductsPage() {

    await this.productsBtn.click();

  }

  async openCart() {

    await this.cartBtn.click();

  }

}

module.exports = { CartPage };