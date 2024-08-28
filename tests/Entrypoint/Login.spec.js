
const { test } = require('@playwright/test');
const CommonUtils   =require('../../support/commands/commands.js');
const loginStaticData   =require('../../support/static/Entrypoint/login.js');
const loginPage =require('../../support/pages/Entrypoint/Login.page.js')

test.describe('PharmaNLB Login Page', () => {

test('Valid Login for PharmaNLB', async ({ page }) => {
  
await loginPage.loginMethod(page,process.env.LOGIN_EMAIL, process.env.LOGIN_PASSWORD)
await CommonUtils.getTitle(page,loginStaticData.homeTitle);
});
});
