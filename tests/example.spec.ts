import { test, expect, chromium } from '@playwright/test';
test('has title', async ({ page, context }) => {
  await page.goto('http://localhost:8080');
  page.getByRole('button', { name: 'Change Server' }).click();
  await page.getByLabel('Servers').click();
  await page.getByRole('option', { name: 'Pre-Prod' }).click();
  await page.getByRole('button', { name: 'Apply' }).click();
  const usernameInput = page.getByLabel('Username');
  const passwordInput = page.getByLabel('Password');
  await usernameInput.fill('skylinedynamics');
  await passwordInput.fill('@Test123');
  await page.getByRole('button', { name: 'Login' }).click();
  const logo = page.locator('img[src*="foodics-logo"]');
  await expect(logo).toBeVisible();
  console.log('Foodics Kiosk logo appears successfully.');
  await page.evaluate(() => {
    document.body.style.zoom = '0.5';
  });
  
  const conceptDropdownArrow = page.locator('.mdi-menu-down').nth(0);
  await conceptDropdownArrow.click();
  await page
  .locator('.v-list-item__title', { hasText: "Shawarmer KSA Airport" })
  .click();

  // Wait for potential popup and handle it
  try {
    const popupDialog = page.locator('div.v-dialog.v-dialog--active.v-dialog--persistent');
    await popupDialog.waitFor({ state: 'visible', timeout: 10000 });
    
    // Try multiple button selectors
    const okayButton = popupDialog.locator('button:has-text("Okay"), button:has-text("OK"), button:has-text("Ok")');
    await okayButton.click();
    console.log('✅ Error popup was displayed and dismissed.');
  } catch (error) {
    console.log('ℹ️ No popup appeared, continuing normally.');
  }
 
  const paymentDeviceDropdownArrow = page
  .locator('div:has-text("Payment Device")')
  .locator('.mdi-menu-down').nth(2);
  await paymentDeviceDropdownArrow.click();
  await page.locator('div.v-list-item__title', { hasText: 'Intersoft (Legacy)' }).click();
  await page.getByRole('button', { name: 'Save Changes' }).click();
  const startText = page.locator('.card-title', { hasText: 'Tap Here to Start' });
  console.log(':white_check_mark: You are in the correct page now successfully.');
  //await page.waitForTimeout(6000);
  await page.locator('.card-title', { hasText: 'Tap Here to Start' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'English' }).click();
  await page.locator('div.card:has-text("TAKE OUT")').click();
  //await page.waitForTimeout(1000);
  //await page.locator('div#card:has-text("Foul")').click();
  await page.getByText('Happy Lunch 2', { exact: true }).click();
  await page.waitForTimeout(2000);
  //await page.getByRole('button', { name: /Add to bag/i }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: /Review Your Order/i }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Skip' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.waitForTimeout(1000);
  await page.getByText('Pay at Cashier').click();
  await page.waitForTimeout(1000);
});