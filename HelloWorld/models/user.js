var mongoose = require('mongoose')

var User = mongoose.model('User', {
	name : String,
	age : Number,
	email: String
});


module.exports = User;

