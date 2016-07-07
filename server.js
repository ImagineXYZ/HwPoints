/**
* @description Module and archives used by the server
* @author Adrián Sánchez <sesamaua@gmail.com>
*/

//Required Modules
var express = require('express'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    dbServices = require('./database');


var app = express();
app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static(__dirname));

app.post('/users', dbServices.insertUser);
app.post('/grade', dbServices.insertGrades);
app.post('/login', dbServices.loginUser);

app.get('*', function (req, res) {
    res.redirect('../#home', 404);
});

// Listening port
var port = Number(process.env.PORT || 8080);
app.listen(port);
console.log('Listening on port ' + port + '...');