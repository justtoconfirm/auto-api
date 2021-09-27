const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

const foo = require('./data.json');

// Use middleware to parse the data into JSON
app.use(express.json());
// Use middleware for CORS to allow endpoint to be hit from different locations
app.use(cors());

// Function to handle GET requests to create an endpoint
app.get('/cars', (req, res) => {
	res.status(200).send(foo);
});

app.listen(port, () => {
	console.log(`API is working and listening on port ${port}.`);
});