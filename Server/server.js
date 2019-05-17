const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const cars = require('./routes/api/cars');

const app = express();

app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose
	.connect(db)
	.then(() => console.log('Mongo is Connected'))
	.catch(err => console.log(err));

app.use('/api/cars', cars);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
