/**
* @description REST Api for the A team
* @author Adrián Sánchez <contact@imaginexyz.com>
*/

var mongo = require('mongodb'),
  crypto = require('crypto');


// Here we find an appropriate database to connect to, defaulting to
// localhost if we don't find one.  
var uristring = 
  process.env.MONGODB_URI || 
  process.env.MONGOHQ_URL || 
  process.env.MONGOLAB_URI||
  'mongodb://localhost/HW-Points';

var db;

mongo.MongoClient.connect(uristring, function(err, database) {
    if(!err) {
        db = database;
        console.log('Connected to the "HW-Points" database');
    }
    else{
        console.log(404, 'Error Connecting to the "HW-Points" database');
    }
});

var key = 'HW_R0CKS16';



exports.insertUser = function(req, res) {
  var resource = req.body;
  var cipher = crypto.createCipher('aes-256-cbc', key);
  cipher.update(resource.pass, 'utf8', 'base64');
  var pass = cipher.final('base64');
  db.collection('Ids').findAndModify({_id:1},{},{$inc:{users:1}},function(err, doc_ids) {
    if(err) {throw err;res.send(400, err);};
    resource["_id"] = doc_ids.value.users;
    resource["pass"] = pass;
    db.collection('Users').insert(resource, function(error, doc_project){
        if(error) {throw error;res.send(400, error);};
        res.send(200, resource);
    })
  });
};


exports.loginUser = function(req, res) {
  var resource = req.body;
  if(resource.email === undefined || resource.pass === undefined){
    res.send(400, false);
  }
  else{
    db.collection('Users').findOne({email:resource.email},function(err, doc) {
      if(err) {
        throw err;
        res.send(400, err);
      }
      else if(doc != null){
        var cipher = crypto.createCipher('aes-256-cbc', key);
        cipher.update(resource.pass, 'utf8', 'base64');
        var pass = cipher.final('base64');
        if(doc.pass === pass){
          res.send(200, doc);
        }
        else{
          res.send(400, false);  
        }
      }
      else{
        res.send(400, false);  
      }
    });
  }
};

exports.insertGrades = function(req, res) {
    console.log(req.body);
    res.send(200,true);
    /*var resource = req.body;
    db.collection('Ids').findAndModify({_id:1},{},{$inc:{schedule:1}},function(err, doc_ids) {
        if(err) {throw err;res.send(400, err);};
        resource["_id"] = doc_ids.value.schedule;
        db.collection('Schedule').insert(resource, function(error, doc_project){
            if(error) {throw error;res.send(400, error);};
            res.send(200, resource);
        })
    });*/
}