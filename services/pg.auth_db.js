const Pool = require('pg').Pool
const pool = new Pool({
  user: 'corina',
  host: 'localhost',
  database: 'Auth',
  password: 'corina',
  port: 5432,
});

if (DEBUG) console.log("Connected to PostgreSQL")
module.exports = pool;   