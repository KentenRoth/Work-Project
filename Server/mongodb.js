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

		db.collection('cars').insertOne({
			keytag: '254368',
			year: '2014',
			make: 'Honda',
			model: 'Accord',
			service: 'Tire work'
		});
	}
);
