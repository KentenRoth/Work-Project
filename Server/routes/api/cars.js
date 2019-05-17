const express = require('express');
const router = express.Router();

const Car = require('../../models/Car');

router.get('/', (req, res) => {
	Car.find().then(cars => res.json(cars));
});

module.exports = router;
