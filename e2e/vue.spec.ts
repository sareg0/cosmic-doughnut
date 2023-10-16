import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('/');
})

// See here how to get started:
// https://playwright.dev/docs/intro
test.describe('dark-mode', () => {
  test.use({
    colorScheme: 'dark'
  });
  test('visits the app root url', async ({ page }) => {
    await expect(page.locator('div.greetings > h1')).toHaveText('You did it!');
  })
})
test.describe('light-mode', () => {
  test.use({
    colorScheme: 'light'
  });
  test('visits the app root url in', async ({ page }) => {
    await expect(page.locator('div.greetings > h1')).toHaveText('You did it!');
  })
})
