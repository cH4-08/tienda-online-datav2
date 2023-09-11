const { Pool } = require('pg');


  const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'charles',
    password: 'ch080',
    database: 'my_store_ch'
  });


module.exports = pool;