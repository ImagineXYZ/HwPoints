/**
* @description Module and archives used by the server
* @author Adrián Sánchez <sesamaua@gmail.com>
*/

//Required Modules
var express = require('express'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');

/*
Seconds: 0-59
Minutes: 0-59
Hours: 0-23
Day of Month: 1-31
Months: 0-11
Day of Week: 0-6*/
/*new cronJob('0 59 * * * *', function(){
        //console.log("CronJob")
        organizationImagine.hourScript();
    }, null, true, null);
 */

var app = express();
app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static(__dirname));

app.get('*', function (req, res) {
    res.redirect('../#home', 404);
});

// Listening port
var port = Number(process.env.PORT || 8080);
app.listen(port);
console.log('Listening on port ' + port + '...');