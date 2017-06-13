var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'gagag' });
});

router.get('/api/get_safari_account', function(req, res, next) {

	console.log(req.url);
	res.json({
		status: 0
	});
});


module.exports = router;
