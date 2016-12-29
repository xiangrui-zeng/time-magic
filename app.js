var express = require('express');
var routes = require('./routes');
var bodyParser = require('body-parser');
 
var app = express();
 
app.set('views', './views');
app.set('view engine', 'html');

app.engine("html", require("ejs").__express);

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

routes(app);
 
app.listen(3000);

console.log("Sognare listening on port %d ", 3000);

module.exports = app;
