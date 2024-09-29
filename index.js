const express = require("express");
const client = require("./db");
const seedDatabase = require("./dbseed");
const app = express();

app.get("/", (req, res) => res.send("Hello, world!"));
app.get("/seed", async (req, res) => {
  try {
    await seedDatabase();
    res.send("Database tables created successfully.");
  } catch (error) {
    res.status(500).send("Error creating database tables.");
  }
});

app.get("/ping", (req, res) => res.send("pong"));

const PORT = 3000;
app.listen(PORT, () => console.log(`Express server - listening on port ${PORT}!`));

client
	.connect()
	.then(() => {
		console.log('Connected to PostgreSQL database');

		client.query('SELECT * FROM reviews', (err, result) => {
			if (err) {
				console.error('Error executing query', err);
			} else {
				console.log('Query result:', result.rows);
			}

			// Close the connection when done
			client
				.end()
				.then(() => {
					console.log('Connection to PostgreSQL closed');
				})
				.catch((err) => {
					console.error('Error closing connection', err);
				});
		});
	})
	.catch((err) => {
		console.error('Error connecting to PostgreSQL database', err);
	});