class SearchPage {

    constructor(page) {

        this.page = page;
        this.searchInput =page.locator('#search_product');
        this.searchBtn =page.locator('#submit_search');
        this.addToCartBtn =page.locator('.add-to-cart').first();
        this.productDetailsBtn =page.locator('a[href*="/product_details/"]').first();

    }

    async gotoProductsPage() {

        await this.page.goto('https://automationexercise.com/products',{waitUntil: 'domcontentloaded',timeout: 60000});

    }

}

module.exports = { SearchPage };