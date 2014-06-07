var mongoose = require('mongoose');

module.exports = mongoose.model('Member', {
	_id: String,
	name: String,
	workNumber: String,
	email: String,
	group: String,
	actived: {
		type: Boolean,
		default: true
	}
});