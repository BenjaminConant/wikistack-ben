var express = require('express');
var router = express.Router();
var Page = require('../models/').Page;

/* GET home page. */
router.get('/', function(req, res) {
  Page.find({},function(err, data) {
	 	console.log('----------------------',data)
		if (err) return console.error(err);
		res.render('index', { title: "wikiwikistackstack", docs: data });
	 })
});

module.exports = router;
