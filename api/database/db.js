import dotenv from 'dotenv';
dotenv.config();

import pg from 'pg';

const { Client } = pg; 

const client = new Client({
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
});

await client.connect();

console.log('Conexão bem-sucedida');

export default client;
