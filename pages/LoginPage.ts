import {Page, expect} from "@playwright/test";
import {userData} from "../user_Data/userData";



export class LoginPage{

    readonly page:Page;

    constructor(page: Page){
        this.page = page;

    }

    async clickTheLoginBtn(){

        const loginBtn =  await this.page.locator('[data-testid="giris-ac"]');
        await loginBtn.click();
        await this.page.waitForTimeout(2000);


    }
    async enterEmailAndPassword(){
        const emailInput = this.page.locator('[data-testid="giris-eposta"]');
        await emailInput.clear();
        await emailInput.fill(userData.email);

        const passwordInput = this.page.locator('[data-testid="giris-parola"]');
        await passwordInput.clear();
        await passwordInput.fill(userData.password);

        const signInBtn = this.page.locator('[data-testid="giris-yap"]');
        await signInBtn.click();
        await this.page.waitForTimeout(10000);

        const demoIcon =  this.page.locator('[data-testid="hesap-butonu"]');
        await expect(demoIcon).toBeVisible();



    }

    
}