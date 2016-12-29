var express = require('express');
 
var app = express();
 
app.set('views', './views');
app.set('view engine', 'html');

app.engine("html", require("ejs").__express);

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('home', {
    title: 'Time Magic'
  });
});

app.get('/home', function(req, res) {
  res.render('home', {
    title: 'Time Magic'
  });
});

app.get('/About', function(req, res) {
  res.render('about', {
    title: 'Time Magic'
  });
});

app.get('/contact', function(req, res) {
  res.render('contact', {
    title: 'Time Magic'
  });
});
 
app.listen(3000);

console.log("Sognare listening on port %d ", 3000);

module.exports = app;
