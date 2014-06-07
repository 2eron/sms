var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Sharing', {
	title: String,
	group: Number,
	userId: String,
	time: {
		date: Date,
		startTime: {
			hour: Number,
			minute: Number
		},
		endTime: {
			hour: Number,
			minute: Number
		}
	},
	location: String,
	des: String,
	number: {
		signNumber: Number,
		joinNumber: Number,
		unsignNumber: Number
	},
	score: {
		personScore: Number,
		otherScore: Number
	},
	record: String,
	closed: {
		type: Boolean,
		default: false
	},
	remind: {
		reminded: {
			type: Boolean,
			default: false
		},
		dayReminded: {
			type: Boolean,
			default: false
		}
	},
	createDate: String,
	closeDate: String
});