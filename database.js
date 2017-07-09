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
var judgesGrades = {'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0};

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
          var userId = doc._id;
          db.collection('Users').update({_id:userId}, {$inc:{logged:1}}, {upsert: true},function(err2, doc2) {
            if(err2) {
              throw err2;
              res.send(400, err2);
            }
            else{
              doc.pass = '##############';
              res.send(200, doc);
            }
          });
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


exports.getGrades = function(req, res) {
  db.collection('Total').findOne({}, function(error, doc_grades){
      if(error) {throw error;res.send(400, error);};
      res.send(200, doc_grades);
  })
}

exports.insertGrades = function(req, res) {
  //res.send(200,true);
  var userId = req.body.user.id;
  var grades = req.body.grades;
  grades['id'] = req.body.user.id;
  db.collection('Judges').findAndModify({_id:userId},{},{$inc:{sent:1}},{upsert:true},function(err, doc) {
      if(err) {throw err;res.send(400, err);}
      else if(doc.value != null){res.send(403, {'error':'Multiple Calificación'});}
      else{
        Object.keys(req.body.judge).forEach(function (i) {
          judgesGrades[i] += req.body.judge[i];
        })
        db.collection('Grades').insert(grades,function(err_ids, doc_grades) {
            if(err_ids) {throw err_ids;res.send(400, err_ids);}
            else{
              db.collection('Total').findAndModify({_id:1},{},{$set:{total:judgesGrades}},{upsert:true}, function(error, doc_grades){
                  if(error) {throw error;res.send(400, error);};
                  res.send(200, grades);
              })
            }
        });
      }
  });
}