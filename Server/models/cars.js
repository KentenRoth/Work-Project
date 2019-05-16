var mongoose = require('mongoose');

var Car = mongoose.model('Car', {
	keytag: {
		type: Number,
		required: true,
		minlength: 6,
		trim: true
	},
	year: {
		type: Number,
		required: true,
		minlength: 4,
		trim: true
	},
	make: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	model: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	service: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	}
});

module.exports = Car;
