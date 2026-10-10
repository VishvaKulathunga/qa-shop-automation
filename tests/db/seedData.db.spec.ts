import { test, expect } from '@playwright/test';
import { DbClient } from '../../utils/dbClient';

test('seed user exists and is active', async () => {
  const db = new DbClient();

  try {
    const user = await db.queryOne(
      'SELECT id, email, name, is_active FROM users WHERE email = $1',
      ['user1@qashop.test']
    );

    expect(user).not.toBeNull();
    expect(user.is_active).toBe(true);
  } finally {
    await db.close();
  }
});

test('every order total is correct', async () => {
  const db = new DbClient();

  try {
    const badOrders = await db.query(`
      SELECT order_no, subtotal, discount_total, shipping_total, grand_total
      FROM orders
      WHERE grand_total <> subtotal - discount_total + shipping_total
    `);

    expect(badOrders).toHaveLength(0);
  } finally {
    await db.close();
  }
});

test('show seeded users', async () => {
  const db = new DbClient();

  try {
    const users = await db.query(`
      SELECT id, email, name, is_active
      FROM users
    `);

    //console.log(users);
  } finally {
    await db.close();
  }
});


test('can retrieve the columns of the user table', async()=>{

  const db = new DbClient();

  try{
    const columns =  await db.query(`SELECT column_name
    FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'users'
    ORDER BY ordinal_position;
  `);
  console.log(columns)
  }finally{
    await db.close();
  }
})


test('User is in an active state', async () => {
  const db = new DbClient();

  try {
    const user = await db.queryOne(
      `SELECT id, email, is_active FROM users WHERE email = $1`,
      ['demo@qashop.test']
    );

    expect(user).not.toBeNull();
    expect(user.is_active).toBe(true);
  } finally {
    await db.close();
  }
});


test("Availability of user's password hash", async()=>{

  const db =  new DbClient();
  try{

    const user =  await db.queryOne('SELECT id, email,password_hash IS NOT NULL AS has_password_hash FROM users WHERE email = $1', ['demo@qashop.test']);
    expect(user).not.toBeNull();
    expect(user.has_password_hash).toBe(true);
  } finally {
    await db.close();
  }
})