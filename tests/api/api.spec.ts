import { test, expect } from '@playwright/test';

test('GET /posts deve retornar 200 e lista de posts', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts');

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.length).toBeGreaterThan(0);
  expect(body[0]).toHaveProperty('title');
});

test('POST /posts deve criar um post', async ({ request }) => {
  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: {
      title: 'QA Engineer',
      body: 'Estudando Playwright API',
      userId: 1,
    },
  });

  expect(response.status()).toBe(201);

  const body = await response.json();
  expect(body.title).toBe('QA Engineer');
});