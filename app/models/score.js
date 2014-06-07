var mongoose = require('mongoose');

module.exports = mongoose.model({
	shareId: String,
	score: {
		total: Number,
		item1: Number,
		item2: Number,
		item3: Number
	},
	userId: String,
	advice: String,
	createDate: String
});