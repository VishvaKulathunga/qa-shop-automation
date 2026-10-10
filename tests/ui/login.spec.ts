import {Page, test, expect} from "@playwright/test";
import { LoginPage }     from "../../pages/LoginPage";

test('User login with valid credentials', async({page})=>{

     const loginPage =  new LoginPage(page);
    await page.goto('https://learnqa.dev/en/qa-shop/');
     await expect(page).toHaveTitle(/QA Learning Platform for Test Automation Engineers/);
     await loginPage.clickTheLoginBtn();
     await loginPage.enterEmailAndPassword();

     


})