const express = require('express');
const router = express.Router();

const Car = require('../../models/Car');

router.get('/', (req, res) => {
	Car.find().then(cars => {
		res.json(cars),
			e => {
				res.status(400).send(e);
			};
	});
});

router.post('/', (req, res) => {
	const newCar = new Car({
		keytag: req.body.keytag,
		year: req.body.year,
		make: req.body.make,
		model: req.body.model,
		service: req.body.service
	});
	newCar.save().then(
		car => {
			res.send(car);
		},
		e => {
			res.status(400).send(e);
		}
	);
});

router.delete('/:id', (req, res) => {
	Car.findById(req.params.id).then(
		car => {
			car.remove().then(() => res.json({ car }));
		},
		e => {
			res.status(400).send(e);
		}
	);
});
module.exports = router;
