var mongoose = require('mongoose');

var PollSchema = new mongoose.Schema({
	user: { type: String, required: true, minlength: 2},
	question: { type: String, required: true, minlength: 8},
	option1: { type: String, required: true, minlength: 3},
	option2: { type: String, required: true, minlength: 3},
	option3: { type: String, required: true, minlength: 3},
	option4: { type: String, required: true, minlength: 3},
	option1vote : {type: Number, default: 0},
	option2vote : {type: Number, default: 0},
	option3vote : {type: Number, default: 0},
	option4vote : {type: Number, default: 0},
	created_at: {type: Date, default: new Date}
});

mongoose.model('Poll', PollSchema);