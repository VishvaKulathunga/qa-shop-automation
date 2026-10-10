import { test, expect } from '@playwright/test';
import { AuthApi } from '../../api/AuthApi';

test('User can login with valid credentials', async ({ request }) => {

    const authApi = new AuthApi(
        request,
        process.env.SANDBOX_KEY!
    );

    const response = await authApi.login(
        'demo@qashop.test',
        'Password123!'
    );

    console.log('STATUS:', response.status());
    console.log('BODY:', await response.text());

    expect(response.status()).toBe(200);
});