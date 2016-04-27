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

	app.post('/upOption2Vote/:id', function(req, res){
		console.log('in upOption2Vote route');
		polls.upOption2Vote(req, res, req.params.id);
	});

	app.post('/upOption3Vote/:id',  function(req, res){
		console.log('in upOption3Vote route');
		polls.upOption3Vote(req, res, req.params.id);
	});

	app.post('/upOption4Vote/:id', function(req, res){
		console.log('in upOption4Vote route');
		polls.upOption4Vote(req, res, req.params.id);
	});

	app.post('/deletePoll/:id', function(req, res){
		console.log('in deletePoll route');
		polls.deletePoll(req, res, req.params.id);
	});	
}