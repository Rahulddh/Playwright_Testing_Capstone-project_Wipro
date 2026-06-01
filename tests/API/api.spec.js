const { test, expect } = require('@playwright/test');

test.describe('API Testing Module', () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';

  // ================================
  // API-01 Validate Post Contains Title
  // ================================
  test('API-01 Validate Post Contains Title', async ({ request }) => {
    const response = await request.get(`${baseUrl}/posts/1`);
    const body = await response.json();
    expect(body).toHaveProperty('title');
  });

  // ================================
  // API-02 GET Posts API
  // ================================
  test('API-02 GET Posts API', async ({ request }) => {
    const response = await request.get(`${baseUrl}/posts`);
    expect(response.status()).toBe(200);
  });

  // ================================
  // API-03 Validate Response Header Exists
  // ================================
  test('API-03 Validate Response Header Exists', async ({ request }) => {
    const response = await request.get(`${baseUrl}/posts`);
    expect(response.headers()).toBeTruthy();
  });

  // ================================
  // API-04 Validate Post ID
  // ================================
  test('API-04 Validate Post ID', async ({ request }) => {
    const response = await request.get(`${baseUrl}/posts/1`);
    const body = await response.json();
    expect(body.id).toBe(1);
  });

  // ================================
  // API-05 Validate API Response Object
  // ================================
  test('API-05 Validate API Response Object', async ({ request }) => {
    const response = await request.get(`${baseUrl}/posts/1`);
    const body = await response.json();
    expect(body).toBeTruthy();
  });

  // ================================
  // API-06 POST Create Post API
  // ================================
  test('API-06 POST Create Post API', async ({ request }) => {
    const response = await request.post(`${baseUrl}/posts`, {
      data: { title: 'Playwright', body: 'API Testing', userId: 1 }
    });
    expect(response.status()).toBe(201);
  });

  // ================================
  // API-07 Validate Post Contains UserId
  // ================================
  test('API-07 Validate Post Contains UserId', async ({ request }) => {
    const response = await request.get(`${baseUrl}/posts/1`);
    const body = await response.json();
    expect(body).toHaveProperty('userId');
  });

  // ================================
  // API-08 GET Single Post API
  // ================================
  test('API-08 GET Single Post API', async ({ request }) => {
    const response = await request.get(`${baseUrl}/posts/1`);
    expect(response.ok()).toBeTruthy();
  });

  // ================================
  // API-09 Validate Response Body
  // ================================
  test('API-09 Validate Response Body', async ({ request }) => {
    const response = await request.get(`${baseUrl}/posts/1`);
    const body = await response.json();
    expect(body.body).toBeTruthy();
  });

  // ================================
  // API-10 Validate Total Posts Returned
  // ================================
  test('API-10 Validate Total Posts Returned', async ({ request }) => {
    const response = await request.get(`${baseUrl}/posts`);
    const body = await response.json();
    expect(body.length).toBeGreaterThan(0);
  });

  // ================================
  // API-11 PUT Update Post API
  // ================================
  test('API-11 PUT Update Post API', async ({ request }) => {
    const response = await request.put(`${baseUrl}/posts/1`, {
      data: { id: 1, title: 'Updated Title', body: 'Updated Body', userId: 1 }
    });
    expect(response.ok()).toBeTruthy();
  });

  // ================================
  // API-12 Validate API Response Time
  // ================================
  test('API-12 Validate API Response Time', async ({ request }) => {
    const start = Date.now();
    await request.get(`${baseUrl}/posts`);
    const end = Date.now();
    expect(end - start).toBeLessThan(3000);
  });

  // ================================
  // API-13 Validate User ID Exists
  // ================================
  test('API-13 Validate User ID Exists', async ({ request }) => {
    const response = await request.get(`${baseUrl}/posts/1`);
    const body = await response.json();
    expect(body.userId).toBeTruthy();
  });

  // ================================
  // API-14 Validate Response Title
  // ================================
  test('API-14 Validate Response Title', async ({ request }) => {
    const response = await request.get(`${baseUrl}/posts/1`);
    const body = await response.json();
    expect(body.title).toBeTruthy();
  });

  // ================================
  // API-15 Validate Status Code 200
  // ================================
  test('API-15 Validate Status Code 200', async ({ request }) => {
    const response = await request.get(`${baseUrl}/posts/1`);
    expect(response.status()).toBe(200);
  });

  // ================================
  // API-16 Validate Content Type
  // ================================
  test('API-16 Validate Content Type', async ({ request }) => {
    const response = await request.get(`${baseUrl}/posts/1`);
    expect(response.headers()['content-type']).toContain('application/json');
  });

  // ================================
  // API-17 Validate Array Response
  // ================================
  test('API-17 Validate Array Response', async ({ request }) => {
    const response = await request.get(`${baseUrl}/posts`);
    const body = await response.json();
    expect(Array.isArray(body)).toBeTruthy();
  });

  // ================================
  // API-18 Validate Post Contains Body
  // ================================
  test('API-18 Validate Post Contains Body', async ({ request }) => {
    const response = await request.get(`${baseUrl}/posts/1`);
    const body = await response.json();
    expect(body).toHaveProperty('body');
  });

  // ================================
  // API-19 DELETE Post API
  // ================================
  test('API-19 DELETE Post API', async ({ request }) => {
    const response = await request.delete(`${baseUrl}/posts/1`);
    expect(response.status()).toBe(200);
  });

  // ================================
  // API-20 Validate Response Is JSON
  // ================================
  test('API-20 Validate Response Is JSON', async ({ request }) => {
    const response = await request.get(`${baseUrl}/posts/1`);
    expect(response.headers()['content-type']).toContain('application/json');
  });
});
