var polls = require('./../controllers/polls.js');

module.exports = function(app){
	app.get('/polls', function(req, res){
		console.log('in polls get route');
		polls.index(req, res);
	});

	app.get('/polls/:id', function(req, res){
		console.log('in polls get_poll route');
		polls.get_poll(req, res, req.params.id);
	});

	app.get('/getPoll/:id', function(req, res){
		polls.getThisPoll(req, res, req.params.id);
	});

	app.post('/polls', function(req, res){
		console.log('in polls post route');
		polls.create(req, res);
	});

	app.post('/upOption1Vote/:id', function(req, res){
		console.log('in upOption1Vote route');
		polls.upOption1Vote(req, res, req.params.id);
	});
}