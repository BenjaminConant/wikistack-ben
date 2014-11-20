var express = require('express');
var router = express.Router();
var Page = require('../models/').Page;

router.get('/',function(req,res){
  res.send("hello world");
})















module.exports = router;
