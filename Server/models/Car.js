const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarSchema = new Schema({
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

module.exports = Car = mongoose.model('car', CarSchema);
