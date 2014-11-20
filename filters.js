module.exports = function(swig) {
  var page_link = function (doc) {
    var link_name;
    if (typeof doc.title !== "undefined" && doc.title !== "") {
      link_name = doc.title
    } else {
      link_name = "Page "+doc.url_name;
    }
    return "<a href='/wiki/"+doc.url_name+"'>"+link_name+"</a>";
  };
  page_link.safe = true;
  swig.setFilter('page_link', page_link);

  var marked = require('marked');
  var markedFilter = function (body) {
    return marked(body);
  };
  markedFilter.safe = true;
  swig.setFilter('marked', markedFilter);

  var link = function (doc) {
    var lname;
    if (typeof doc.title !== "undefined" && doc.title !== "") {
      lname = doc.title
    } else {
      lname = "Page "+doc.url_name;
    }
    return "<a href='/wiki/"+doc.url_name+"/"+doc.id+"'>"+lname+"</a>";
  };
  link.safe = true;
  swig.setFilter('link',link);
};
