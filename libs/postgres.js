const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'charles',
    password: 'ch080',
    database: 'my_store_ch'
  });
  await client.connect();
  return client;
}

module.exports = getConnection;