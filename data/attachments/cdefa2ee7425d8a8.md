# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: shipping/shipping.spec.js >> Shipping Address Module >> SHIPPING-17 Verify current url contains automationexercise
- Location: tests/shipping/shipping.spec.js:112:3

# Error details

```
Error: locator.fill: value: expected string, got undefined
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
        - listitem [ref=e18]:
          - link " Cart" [ref=e19] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e20]: 
            - text: Cart
        - listitem [ref=e21]:
          - link " Signup / Login" [ref=e22] [cursor=pointer]:
            - /url: /login
            - generic [ref=e23]: 
            - text: Signup / Login
        - listitem [ref=e24]:
          - link " Test Cases" [ref=e25] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e26]: 
            - text: Test Cases
        - listitem [ref=e27]:
          - link " API Testing" [ref=e28] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e29]: 
            - text: API Testing
        - listitem [ref=e30]:
          - link " Video Tutorials" [ref=e31] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e32]: 
            - text: Video Tutorials
        - listitem [ref=e33]:
          - link " Contact us" [ref=e34] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e35]: 
            - text: Contact us
  - generic [ref=e38]:
    - generic [ref=e40]:
      - heading "Login to your account" [level=2] [ref=e41]
      - generic [ref=e42]:
        - textbox "Email Address" [ref=e43]
        - textbox "Password" [ref=e44]
        - button "Login" [ref=e45] [cursor=pointer]
    - heading "OR" [level=2] [ref=e47]
    - generic [ref=e49]:
      - heading "New User Signup!" [level=2] [ref=e50]
      - generic [ref=e51]:
        - textbox "Name" [ref=e52]
        - textbox "Email Address" [ref=e53]
        - button "Signup" [ref=e54] [cursor=pointer]
  - contentinfo [ref=e55]:
    - generic [ref=e60]:
      - heading "Subscription" [level=2] [ref=e61]
      - generic [ref=e62]:
        - textbox "Your email address" [ref=e63]
        - button "" [ref=e64] [cursor=pointer]:
          - generic [ref=e65]: 
        - paragraph [ref=e66]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e70]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1  | class LoginPage {
  2  | 
  3  |     constructor(page) {
  4  |         this.page = page;
  5  | 
  6  |         // Block Google Ads and external trackers to prevent WebKit test failures and click interception
  7  |         page.route('**/*', (route) => {
  8  |             const url = route.request().url();
  9  |             if (url.includes('google') || url.includes('ads') || url.includes('doubleclick') || url.includes('analytics') || url.includes('adservice')) {
  10 |                 route.abort();
  11 |             } else {
  12 |                 route.continue();
  13 |             }
  14 |         }).catch(() => {});
  15 | 
  16 |         // Locators
  17 |         this.email = page.locator('input[data-qa="login-email"]');
  18 |         this.password = page.locator('input[data-qa="login-password"]');
  19 |         this.loginBtn = page.locator('button[data-qa="login-button"]');
  20 | 
  21 |         this.logoutBtn = page.locator('a[href="/logout"]');
  22 |     }
  23 | 
  24 |     // Navigate to login page
  25 |     async gotoLoginPage() {
  26 |         await this.page.goto('https://automationexercise.com/login');
  27 |     }
  28 | 
  29 |     // Login action
  30 |     async login(email, password) {
> 31 |         await this.email.fill(email);
     |                          ^ Error: locator.fill: value: expected string, got undefined
  32 |         await this.password.fill(password);
  33 |         await this.loginBtn.click();
  34 |     }
  35 | 
  36 |     // Logout action
  37 |     async logout() {
  38 |         await this.logoutBtn.click();
  39 |     }
  40 | }
  41 | 
  42 | module.exports = LoginPage;
```