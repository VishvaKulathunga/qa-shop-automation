import { APIRequestContext } from '@playwright/test';

export class AuthApi {

    constructor(
        private request: APIRequestContext,
        private sandboxKey: string
    ) {}

    async login(email: string, password: string) {

        return await this.request.post(
            'http://localhost:4000/api/v1/auth/login',
            {
                headers: {
                    'X-Sandbox-Key': this.sandboxKey
                },
                data: {
                    email,
                    password
                }
            }
        );
    }
}