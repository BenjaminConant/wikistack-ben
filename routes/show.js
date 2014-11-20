var express = require('express');
var router = express.Router();
var Page = require('../models/').Page;

router.get('/:url', function(req,res){
  // res.send("hello")
  var postUrl = req.params.url;
  // console.log(postUrl);
  Page.find({'url_name': postUrl}, function(err,data){
    if (err) return console.error(err);
    if (data.length===1) {
    // console.log(data[0]['title']);
    // console.log(data);
    res.render('show', {title: 'WIKISTACK', postTitle: data[0]['title'], postContent: data[0]['body'], url_name: data[0]['url_name']});
  } else {
    var i=0;
    for (var keys in data){
      console.log("we are iterating")
      data[keys]['number']=i;
      i++;
      console.log(data[keys]);
    }

  res.render('index',{title: 'WIKISTACK', docs: data});
  };
  })
})
router.post('/:url/edit',function(req,res){
  var postUrl = req.params.url;
  Page.find({'url_name': postUrl}, function(err,data){
    if (err) return console.error(err);
    console.log(data[0]['title']);
    res.render('edit', {title: 'WIKISTACK', postTitle: data[0]['title'], postContent: data[0]['body'], url_name: data[0]['url_name']})
  })
})
router.post('/:url/delete',function(req,res){
  var postUrl = req.params.url;
  // res.send("reached delte")
  Page.remove({'url_name': postUrl}, function(err,data){
    res.redirect('/');
  })
})
router.post('/:url/add/submit', function(req,res){
  var postUrl = req.params.url;
  var obj={ "title": req.body.title, "body": req.body.content, "url_name": postUrl};
  console.log("I should be updatng", obj);

  Page.update({url_name: postUrl},obj,function(err){
    res.redirect('/wiki/'+postUrl);
  })
})


module.exports = router;
