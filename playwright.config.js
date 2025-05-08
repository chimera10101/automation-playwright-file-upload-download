import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  retries: 0,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    acceptDownloads: true // Important for download test
  },
  reporter: [['html'], ['list']]
});