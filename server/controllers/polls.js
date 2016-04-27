var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');

module.exports = (function(){
	return {
		index: function(req, res){
			Poll.find({}, function(err, results){
				if(err){
					console.log('Could not get those polls', results);				
				}
				else {
					console.log('GOT EM');
					res.json(results);
				}
			});
		},
		create: function(req, res){
			console.log('about save new poll');
			var newPoll = new Poll({user: req.body.user, question: req.body.question, option1: req.body.option1, option2: req.body.option2, option3: req.body.option3, option4: req.body.option4});
			console.log(newPoll);
			newPoll.save(function(err, results){
				if(err){
					console.log('Could not save that poll', results);
				}
				else {
					console.log('SAAAAAAAFE');
					res.json(results);
				}
			});
		},
		get_poll: function(req, res){
			console.log('SUP');
			Poll.findOne({_id:req.params.id}, function(err, results){
				console.log({_id:req.params.id});
				if(err){
					console.log('Could not get that poll', results);
				}
				else {
					console.log('GOT IT');
					res.json(results);
				}
			});
		}
	}
})();