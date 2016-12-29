var express = require('express');
 
var app = express();
 
app.set('views', './views');
app.set('view engine', 'html');

app.engine("html", require("ejs").__express);

app.use(express.static('public'));

app.get('/calendar_view', function(req, res) {
  res.render('calendar', {
    title: 'Calendar'
  });
});
 
app.listen(3000);

console.log("Sognare listening on port %d ", 3000);

module.exports = app;
