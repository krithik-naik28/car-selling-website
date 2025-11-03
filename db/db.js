const { Pool } = require('pg');

// PostgreSQL connection pool setup
const pool = new Pool({
  user: 'postgres',          // replace with your PostgreSQL username
  host: 'localhost',         // local database
  database: 'car_selling',   // replace with your actual database name
  password: '9323555645', // replace with your PostgreSQL password
  port: 5432,                // default PostgreSQL port
});

// Exported the pool object so we can use it in other files 
module.exports = pool;
