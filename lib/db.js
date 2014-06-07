var mongoose = require('mongoose');

function connect(){
	mongoose.connect('mongodb://127.0.0.1:8099/sms');
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'Connection error.'));
	db.once('open', function(){
		console.log('Connected!');
	});
}

exports.connect = connect;