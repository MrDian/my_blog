var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/api/get_safari_account', function(req, res, next) {
	
	res.json({
		status: 0
	});
});


module.exports = router;
