import { test, expect } from '@playwright/test'

test.describe('Pulse Table', () => {
  test('renders and matches layout snapshot', async ({ page }) => {
    await page.goto('/pulse')
    const table = page.locator('div:has-text("Price"):has-text("Volume")').first()
    await expect(table).toBeVisible()
    await page.waitForTimeout(1200)
    await expect(table).toHaveScreenshot('pulse-table.png', { maxDiffPixelRatio: 0.02 })
  })
})
