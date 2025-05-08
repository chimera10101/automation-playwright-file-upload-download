import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test('File Download Test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/download');

  const [ download ] = await Promise.all([
    page.waitForEvent('download'),
    page.click('a[href$="some-file.txt"]') // Change filenames as available.
  ]);

  const downloadPath = await download.path();
  const suggestedFilename = download.suggestedFilename();

  const targetPath = path.join('downloads', suggestedFilename);
  await download.saveAs(targetPath);

  expect(fs.existsSync(targetPath)).toBeTruthy();
});