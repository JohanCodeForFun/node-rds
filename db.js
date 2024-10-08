const pg = require("pg");
const fs = require('fs');

const { Client } = pg;

// Database connection configuration
const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  ssl: {
    require: true,
    rejectUnauthorized: true,
    ca: fs.readFileSync('eu-north-1-bundle.pem').toString(),
  }
};

const client = new Client(dbConfig);

module.exports = client;