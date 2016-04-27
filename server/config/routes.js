var polls = require('./../controllers/polls.js');

module.exports = function(app){
	app.get('/polls', function(req, res){
		console.log('in polls get route');
		polls.index(req, res);
	});

	app.get('/polls/:id', function(req, res){
		console.log('in polls get_poll route', req.params.id);
		polls.get_poll(req, res, req.params.id);
	});

	app.post('/polls', function(req, res){
		console.log('in polls post route');
		polls.create(req, res);
	});
}