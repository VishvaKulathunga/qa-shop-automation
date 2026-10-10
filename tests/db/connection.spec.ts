import {test, expect } from '@playwright/test';
import { DbClient } from '../../utils/dbClient';


test('can connect to qa shop database', async() =>{
  const dbClient = new DbClient();
  try{
    const row = await dbClient.queryOne('SELECT 1 AS ok');
expect(row?.ok).toBe(1);

  } finally{
    await dbClient.close();
  }

})

