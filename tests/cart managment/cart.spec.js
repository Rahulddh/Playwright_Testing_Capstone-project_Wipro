
const { test, expect } = require('@playwright/test');
const  LoginPage  = require('../../POM/login.js');
const  {SearchPage}  = require('../../POM/search.js');
const { CartPage } = require('../../POM/cart.js');
const testData = [

  {
    name: 'Verify products page opens',

    testFunction: async (cart, page) => {

      await cart.goToProductsPage();

      await expect(page)
        .toHaveURL(/products/);

    }
  },

  {
    name: 'Verify cart icon visible',

    testFunction: async (cart) => {

      await expect(cart.cartBtn)
        .toBeVisible();

    }
  },

  {
    name: 'Verify products button visible',

    testFunction: async (cart) => {

      await expect(cart.productsBtn)
        .toBeVisible();

    }
  },

  {
    name: 'Verify cart page opens',

    testFunction: async (cart, page) => {

      await cart.openCart();

      await expect(page)
        .toHaveURL(/view_cart/);

    }
  },

  {
    name: 'Verify body visible on cart page',

    testFunction: async (cart, page) => {

      await cart.openCart();

      await expect(page.locator('body'))
        .toBeVisible();

    }
  },

  {
    name: 'Verify page contains cart text',

    testFunction: async (cart, page) => {

      await cart.openCart();

      await expect(page.locator('body'))
        .toContainText('Cart');

    }
  },

  {
    name: 'Verify product page navigation',

    testFunction: async (cart, page) => {

      await cart.goToProductsPage();

      await expect(page)
        .toHaveURL(/products/);

    }
  },

  {
    name: 'Verify cart button navigation',

    testFunction: async (cart, page) => {

      await cart.openCart();

      await expect(page)
        .toHaveURL(/view_cart/);

    }
  },

  {
    name: 'Verify page title contains automation',

    testFunction: async (cart, page) => {

      await expect(page)
        .toHaveTitle(/Automation/);

    }
  },

  {
    name: 'Verify current url contains automation exercise',

    testFunction: async (cart, page) => {

      await expect(page.url())
        .toContain('automationexercise');

    }
  },

  {
    name: 'Verify cart page url',

    testFunction: async (cart, page) => {

      await cart.openCart();

      expect(page.url())
        .toContain('view_cart');

    }
  },

  {
    name: 'Verify products url',

    testFunction: async (cart, page) => {

      await cart.goToProductsPage();

      expect(page.url())
        .toContain('products');

    }
  },

  {
    name: 'Verify cart button enabled',

    testFunction: async (cart) => {

      await expect(cart.cartBtn)
        .toBeEnabled();

    }
  },

  {
    name: 'Verify products button enabled',

    testFunction: async (cart) => {

      await expect(cart.productsBtn)
        .toBeEnabled();

    }
  },

  {
    name: 'Verify page loaded successfully',

    testFunction: async (cart, page) => {

      await expect(page.locator('body'))
        .toBeVisible();

    }
  }

];

test.describe('Cart Module', () => {

  test.beforeEach(async ({ page }) => {

    await page.goto(
      'https://automationexercise.com',
      {
        waitUntil: 'domcontentloaded'
      }
    );

  });

  testData.forEach(({ name, testFunction }) => {

    test(name, async ({ page }) => {

      const cart = new CartPage(page);

      await testFunction(cart, page);

    });

  });

});