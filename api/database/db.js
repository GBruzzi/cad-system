import pg from 'pg';

const { Client } = pg; 

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: '123456',
  database: 'crud',
});

await client.connect();

console.log('Conexão bem-sucedida');

export default client;