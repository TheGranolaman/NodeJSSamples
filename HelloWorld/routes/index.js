var express = require('express');
var router = express.Router();
var path = require('path')


/* GET home page. Since we arent using jade, we must send the html file using the path.join
	__dirname refers to current dir, '../views' will tell it to go back one dir and then into views
	'indext.html is our view'
 */
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../views', 'index.html'))
});

module.exports = router;