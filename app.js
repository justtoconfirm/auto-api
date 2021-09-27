const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

// Use middleware to parse the data into JSON
app.use(express.json());
// Use middleware for CORS to allow endpoint to be hit from different locations
app.use(cors());

// Function to handle GET requests to create an endpoint
app.get('/cars/volkswagen/golf',(req, res) => {

	res.status(200).send(require('./data/volkswagen/golf.json'));
	// Sending a 404 when data is not found when hitting the endpoint
	res.status(404).send('Data not found');
});

app.listen(port, () => {
	console.log(`API is working and listening on port ${port}.`);
});