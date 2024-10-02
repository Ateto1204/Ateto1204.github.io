import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://ateto1204.github.io/');

  await expect(page).toHaveTitle(/Dong-Yi Su/);
});

test('has profile img', async ({ page }) => {
  await page.goto('https://ateto1204.github.io/');

  await page.getByRole('img', { name: '蘇東毅' }).click();
});

test('has title name and profile subtitle', async({ page }) => {
  await page.goto('https://ateto1204.github.io/');

  await page.getByRole('heading', { name: 'Dong-Yi Su' }).click();
  await page.getByRole('heading', { name: 'Software Engineer | Developer' }).click();

  await page.locator('header svg').first().click();
  await page.locator('header path').nth(1).click();
});

test('has profile text paragraph', async ({ page }) => {
  await page.goto('https://ateto1204.github.io/');

  await page.getByText('This is Dong-Yi Su aka Ateto').click();
  await page.getByText('My areas of expertise include').click();
});

test('has contact icon', async ({ page }) => {
  await page.goto('https://ateto1204.github.io/');

  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link').nth(1).click();
  const page1 = await page1Promise;
  
  const mailtoLink = await page.getByRole('link').nth(2).getAttribute('href');
  expect(mailtoLink).toContain('mailto:');

  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('link').nth(3).click();
  const page3 = await page3Promise;
});

test('exp page', async ({ page }) => {
  await page.goto('https://ateto1204.github.io/');

  await page.locator('section').filter({ hasText: 'Experience Jul2024 -' }).locator('path').click();
  await page.getByRole('heading', { name: 'Experience' }).click();

  await page.locator('.w-9 > path:nth-child(2)').click();
  await page.locator('.w-9 > path').click();
});

test('has language switching btn', async ({ page }) => {
  await page.goto('https://ateto1204.github.io/');
  
  await page.getByRole('button', { name: '中' }).click();
  await page.getByRole('button', { name: 'En' }).click();
});