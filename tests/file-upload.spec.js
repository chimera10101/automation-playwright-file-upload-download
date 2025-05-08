import { test, expect } from '@playwright/test';

test(' File Upload test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/upload');

  const filePath = 'tests/fixtures/sample-upload.txt';
  await page.setInputFiles('input#file-upload', filePath);

  await page.click('input#file-submit');

  await expect(page.locator('#uploaded-files')).toHaveText('sample-upload.txt');
});