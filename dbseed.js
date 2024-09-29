const client = require("./db");

const createTable = `
  CREATE TABLE reviews(
    id serial PRIMARY KEY,
    username VARCHAR(50),
    feedback VARCHAR(255)
  );
`;

const seedDatabase = async () => {
  try {
    await client.connect();
    console.log('Connected to PostgreSQL database');

    await client.query(createTable);
    console.log('Table created successfully');
  } catch (error) {
    console.error('Error creating table', err);
  } finally {
    await client.end();
    console.log('Connection to PostgreSQL closed');
  }
};

module.exports = seedDatabase;