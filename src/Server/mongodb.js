const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'car-appointments';

MongoClient.connect(
	connectionURL,
	{ useNewUrlParser: true },
	(error, client) => {
		if (error) {
			return console.log('There was an error');
		}

		const db = client.db(databaseName);

		db.collection('users').insertOne({
			name: 'Kent',
			age: 27
		});
	}
);
