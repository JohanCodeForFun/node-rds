const express = require("express");
const client = require("./db");
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

app.get("/", (req, res) => res.send("Hello, world!"));
app.get("/ping", (req, res) => res.send("pong"));

// Connect to the PostgreSQL database once when the application starts
client
  .connect()
  .then(() => {
    console.log("Connected to PostgreSQL database");

    app.get("/reviews", async (req, res) => {
      try {
        const result = await client.query("SELECT * FROM reviews");
        console.log("Query result:", result.rows);
        res.json(result.rows);
      } catch (err) {
        console.error("Error executing query", err);
        res.status(500).send("Error retrieving reviews");
      }
    });

    app.post("/reviews", async (req, res) => {
      const { username, feedback } = req.body;

      const insertQuery = `
        INSERT INTO reviews (username, feedback)
        VALUES ($1, $2)
        RETURNING *;
      `;

      try {
        const result = await client.query(insertQuery, [username, feedback]);
        console.log("Insert result:", result.rows[0]);
        res.status(201).json(result.rows[0]);
      } catch (err) {
        console.error("Error executing query", err);
        res.status(500).send("Error inserting review");
      }
    });
  })
  .catch((err) => {
    console.error("Error connecting to PostgreSQL database", err);
  });

// Start the server
const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Express server - listening on port ${PORT}!`)
);
