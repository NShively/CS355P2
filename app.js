// import libraries
var express = require('express'),
    ejs     = require('ejs'),
    bodyParser = require('body-parser');

// import routes


var media_route = require('./controller/MediocreMedia');

// initialize express web application framework
// http://expressjs.com/
var app = express();

// allow json data to be parsed
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


//configure template engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// example of a global variable that can be passed to a template






app.set('subtitle', 'CS355P2');

//configure routes

app.use('/', media_route);

// configure static directory for javascript, css, etc.
app.use(express.static('public'));

app.set('port', 8010);  //use your own port
app.listen(app.get('port'));
console.log("Express server listening on port", app.get('port'));