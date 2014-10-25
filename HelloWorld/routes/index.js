var express = require('express');
var router = express.Router();
var path = require('path')
var User = require('../models/user.js')
/* GET home page. Since we arent using jade, we must send the html file using the path.join
	__dirname refers to current dir, '../views' will tell it to go back one dir and then into views
	'indext.html is our view'
 */
router.get('/', function(req, res) {
	  res.sendFile(path.join(__dirname, '../views', 'index.html'))
});

router.get('/users', function(req, res) {
	return User.find(function(err,users){
  		if (!err) {
      	return res.send(users);
    	} else {
     	 return console.log(err);
    	}
  	})
});

router.post('/adduser', function(req,req){

    // Get our form values. These rely on the "name" attributes
    var user = new User({
    	name : req.body.username,
   	 	age : req.body.age,
    	email : req.body.email
    });

    user.save(function(err){
    	if(!err){
    		console.log("Oh no!")
    	}else{
    		console.log("Oh yea!");
    	}
    })

    return res.send(user);
});

module.exports = router;