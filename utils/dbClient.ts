import {Pool,QueryResult} from 'pg';

export class DbClient{

  private pool:Pool;

  constructor(){
    this.pool = new Pool({

      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
      

    });
   
  }

  async query(
    sql: string,
    params: unknown[] = []
  ):Promise<any[]>{
    const result = await this.pool.query(sql, params);
    return result.rows;

  }
  async queryOne(sql: string, params: unknown[] = []): Promise<any | null> {
  const rows = await this.query(sql, params);
  return rows[0] ?? null;
}

 async close(): Promise<void>{
  await this.pool.end();
 }
  }
