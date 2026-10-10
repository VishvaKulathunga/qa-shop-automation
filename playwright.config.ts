import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  

    workers: 1,

    use: {
        
        screenshot: 'only-on-failure',
        video: 'on',
        
        
    },

    reporter: [
        ['dot'],
        ['json', { outputFile: 'jsonReports/report.json' }],
        ['html', { open: 'always' }],
    ],
});