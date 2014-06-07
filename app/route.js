var express = require('express');
var router = express.Router();
var groups = require('../lib/group');
var Member = require('./models/member.js');

function route(app){

	// index
	// router.get('/', function(req, res){
	// 	res.render('index', {
	// 		layout: 'layout'
	// 	});
	// });

	// get shares
	// router.get('/shares', function(req, res){
	// 	// 
	// });

	// GROUP
	// =======================================
	router.get('/api/groups', function(req, res){
		res.json(groups);
	});

	// MEMBER
	// =======================================
	// add a member
	router.post('/api/members', function(req, res){
		
		// create a member
		// console.log(req.body);
		Member.create({
			_id: (new Date()).getTime(),
			name: req.body.name,
			workNumber: req.body.workNumber,
			email: req.body.email,
			group: req.body.group
		}, function(err, member){
			if(err){
				res.send(err);
			}else{
				Member.find(function(err, members){
					if(err){
						res.send(err);
					}else{
						res.json(members);
					}
				});
			}
		});
		
	});
	// get members
	router.get('/api/members', function(req, res){
		Member.find(function(err, members){
			if(err){
				res.send(err);
			}else{
				res.json(members);
			}
		})
	});

	// delete a member
	router.delete('/api/members/:userId', function(req, res){
		Member.remove({
			_id: req.params.userId
		}, function(err, member){
			if(err){
				res.send(err);
			}else{
				Member.find(function(err, members){
					if(err){
						res.send(err);
					}else{
						res.json(members);
					}
				});
			}
		});
	});

	// change a member' status
	router.get('/api/members/:userId/:actived', function(req, res){
		// console.log(req.params.actived);
		Member.update({
			_id: req.params.userId
		}, {
			$set: {
				actived: req.params.actived
			}
		}, function(err, member){
			if(err){
				res.send(err);
			}else{
				Member.find(function(err, members){
					if(err){
						res.send(err);
					}else{
						res.json(members);
					}
				});
			}
		});
	});

	// PAGE ROUTE
	router.get('/', function(req, res){
		res.sendfile('../index.html');
	});

	app.use('/', router);
}

exports.route = route;