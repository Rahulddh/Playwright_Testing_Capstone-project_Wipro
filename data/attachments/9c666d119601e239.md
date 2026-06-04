# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: home/home.spec.js >> Home Page Tests >> HOME-03 Verify delete account button visible
- Location: tests/home/home.spec.js:36:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('a[href=\'/delete_account\']').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('a[href=\'/delete_account\']').first()

```

```yaml
- banner:
  - link "Website for automation practice":
    - /url: /
    - img "Website for automation practice"
  - list:
    - listitem:
      - link " Home":
        - /url: /
    - listitem:
      - link " Products":
        - /url: /products
    - listitem:
      - link " Cart":
        - /url: /view_cart
    - listitem:
      - link " Signup / Login":
        - /url: /login
    - listitem:
      - link " Test Cases":
        - /url: /test_cases
    - listitem:
      - link " API Testing":
        - /url: /api_list
    - listitem:
      - link " Video Tutorials":
        - /url: https://www.youtube.com/c/AutomationExercise
    - listitem:
      - link " Contact us":
        - /url: /contact_us
- heading "Login to your account" [level=2]
- textbox "Email Address"
- textbox "Password"
- button "Login"
- heading "OR" [level=2]
- heading "New User Signup!" [level=2]
- textbox "Name"
- textbox "Email Address"
- button "Signup"
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
```

# Test source

```ts
  1   | const { test, expect } = require('@playwright/test');
  2   | const LoginPage = require('../../POM/login.js');
  3   | const { HomePage } = require('../../POM/home.js');
  4   | require('dotenv').config();
  5   | 
  6   | test.describe('Home Page Tests', () => {
  7   |     let loginPage;
  8   |     let homePage;
  9   | 
  10  |     test.beforeEach(async ({ page }) => {
  11  |         loginPage = new LoginPage(page);
  12  |         homePage = new HomePage(page);
  13  | 
  14  |         // Login first
  15  |         await loginPage.gotoLoginPage();
  16  |         await loginPage.login(process.env.EMAIL, process.env.PASSWORD);
  17  |     });
  18  | 
  19  |     // ================================
  20  |     // HOME-01 Verify home page visible successfully
  21  |     // ================================
  22  |     test('HOME-01 Verify home page visible successfully', async ({ page }) => {
  23  |         await expect(page.locator('body')).toContainText('Home');
  24  |      });
  25  | 
  26  |     // ================================
  27  |     // HOME-02 Verify logout button visible
  28  |     // ================================
  29  |     test('HOME-02 Verify logout button visible', async () => {
  30  |         await expect(homePage.logoutBtn).toBeVisible();
  31  |      });
  32  | 
  33  |     // ================================
  34  |     // HOME-03 Verify delete account button visible
  35  |     // ================================
  36  |     test('HOME-03 Verify delete account button visible', async () => {
> 37  |         await expect(homePage.deleteaccountBtn).toBeVisible();
      |                                                 ^ Error: expect(locator).toBeVisible() failed
  38  |      });
  39  | 
  40  |     // ================================
  41  |     // HOME-04 Verify home page button visible
  42  |     // ================================
  43  |     test('HOME-04 Verify home page button visible', async () => {
  44  |         await expect(homePage.homeBtn).toBeVisible();
  45  |      });
  46  | 
  47  |     // ================================
  48  |     // HOME-05 Verify API list button visible
  49  |     // ================================
  50  |     test('HOME-05 Verify API list button visible', async () => {
  51  |         await expect(homePage.apiBtn).toBeVisible();
  52  |      });
  53  | 
  54  |     // ================================
  55  |     // HOME-06 Verify Product button visible
  56  |     // ================================
  57  |     test('HOME-06 Verify Product button visible', async () => {
  58  |         await expect(homePage.productsBtn).toBeVisible();
  59  |      });
  60  | 
  61  |     // ================================
  62  |     // HOME-07 Verify cart button visible
  63  |     // ================================
  64  |     test('HOME-07 Verify cart button visible', async () => {
  65  |         await expect(homePage.cartBtn).toBeVisible();
  66  |      });
  67  | 
  68  |     // ================================
  69  |     // HOME-08 Verify Test Cases button visible
  70  |     // ================================
  71  |     test('HOME-08 Verify Test Cases button visible', async () => {
  72  |         await expect(homePage.testcasesBtn).toBeVisible();
  73  |      });
  74  | 
  75  |     // ================================
  76  |     // HOME-09 Verify Video Tutorials button visible
  77  |     // ================================
  78  |     test('HOME-09 Verify Video Tutorials button visible', async () => {
  79  |         await expect(homePage.videoBtn).toBeVisible();
  80  |      });
  81  | 
  82  |     // ================================
  83  |     // HOME-10 Verify Contact Us button visible
  84  |     // ================================
  85  |     test('HOME-10 Verify Contact Us button visible', async () => {
  86  |         await expect(homePage.contactBtn).toBeVisible();
  87  |      });
  88  | 
  89  |     // ================================
  90  |     // HOME-11 Verify Logo visible
  91  |     // ================================
  92  |     test('HOME-11 Verify Logo visible', async () => {
  93  |         await expect(homePage.logo).toBeVisible();
  94  |     });
  95  | 
  96  |     // ================================
  97  |     // HOME-12 Verify Left Arrow visible
  98  |     // ================================
  99  |     test('HOME-12 Verify Left Arrow visible', async () => {
  100 |         await expect(homePage.prevSlideBtn).toBeVisible();
  101 |     });
  102 | 
  103 |     // ================================
  104 |     // HOME-13 Verify Right Arrow visible
  105 |     // ================================
  106 |     test('HOME-13 Verify Right Arrow visible', async () => {
  107 |         await expect(homePage.nextSlideBtn).toBeVisible();
  108 |     });
  109 | 
  110 |     // ================================
  111 |     // HOME-14 Verify Category visible
  112 |     // ================================
  113 |     test('HOME-14 Verify Category visible', async ({ page }) => {
  114 |         await expect(page.locator('.left-sidebar')).toContainText(/Category/i);
  115 |     });
  116 | 
  117 |     // ================================
  118 |     // HOME-15 Verify Feature Items visible
  119 |     // ================================
  120 |     test('HOME-15 Verify Feature Items visible', async ({page}) => {
  121 |         await expect(page.locator('.title.text-center').first()).toContainText(/Features Items/i);
  122 |     });
  123 | 
  124 |     // ================================
  125 |     // HOME-16 Verify Brand visible
  126 |     // ================================
  127 |     test('HOME-16 Verify Brand visible', async ({page}) => {
  128 |         await expect(page.locator('.brands_products')).toContainText(/Brands/i);
  129 |     });
  130 | });
  131 | 
```