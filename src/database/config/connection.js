require('dotenv').config();
const { Pool } = require('pg');

const {
  NODE_ENV, DATABASE_URL, DATABASE_URL_DEV, DATABASE_URL_TEST,
} = process.env;
let URL;
let SSL=false;

switch (NODE_ENV) {
  case 'development':
    URL = DATABASE_URL_DEV;
    break;
  case 'production':
    URL = DATABASE_URL;
    SSL = { rejectUnauthorized: false };
    break;
  case 'test':
    URL = DATABASE_URL_TEST;
    console.log(DATABASE_URL_TEST)
    break;
  default:
    throw new Error('NODE_ENV is not set to development, production, and test');
}

const connection = new Pool({
  connectionString: URL,
  ssl: SSL,
});

module.exports = connection;
