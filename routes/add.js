var express = require('express');
var router = express.Router();
var Page = require('../models/').Page;

/* GET users listing. */
router.get('/', function(req, res) {
	console.log("serve up some wikiwikistackstack add page!!");
	res.render('add', { title: 'wikiwikistackstack'});
});

router.post('/submit', function(req, res) {
	console.log("now add the page once it is submited!!");
	var postTitle = req.body['post-title'];
	var postContent = req.body['post-content'];
	var postUrl = postTitle.replace(/\s|\'|\?/g, "_");
	console.log(postTitle + "----------" + postContent + "---------" + postUrl);


  // STUDENT ASSIGNMENT:

  	var p = new Page({ "title": postTitle, "body":postContent, "url_name": postUrl});
 	p.save();
  	res.redirect('/');
});

module.exports = router;
