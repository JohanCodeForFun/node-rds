const createTable = `
  CREATE TABLE reviews(
    id serial PRIMARY KEY,
    username VARCHAR(50),
    feedback VARCHAR(255)
  );
`;

client.query(createTable, (err, result) => {
	if (err) {
		console.error('Error creating table', err);
	} else {
		console.log('Table created successfully');
	}

	client.end();
});