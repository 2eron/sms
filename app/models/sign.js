var mongoose = require('mongoose');

module.exports = mongoose.model({
	userId: String,
	shareId: String,
	scored: {
		type: Boolean,
		default: false
	},
	absent: {
		type: Boolean,
		default: true
	},
	signed: Boolean
});