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

exports.getGrades = function(req, res) {
  var totalGrades = {1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0};
  var judgeCount = 14;
  db.collection('Judge1').find({}).toArray(function(error1, doc1){
    if(error1) {throw error1;res.send(400, error1);}
    else{
      db.collection('Judge2').find({}).toArray(function(error2, doc2){
          if(error2) {throw error2;res.send(400, error2);}
          else{
            db.collection('Judge3').find({}).toArray(function(error3, doc3){
                if(error3) {throw error3;res.send(400, error3);}
                else{
                  db.collection('Judge4').find({}).toArray(function(error4, doc4){
                      if(error3) {throw error3;res.send(400, error3);}
                      else{
                        db.collection('Judge5').find({}).toArray(function(error5, doc5){
                            if(error3) {throw error3;res.send(400, error3);}
                            else{
                              db.collection('Judge6').find({}).toArray(function(error6, doc6){
                                  if(error3) {throw error3;res.send(400, error3);}
                                  else{
                                    db.collection('Judge7').find({}).toArray(function(error7, doc7){
                                        if(error3) {throw error3;res.send(400, error3);}
                                        else{
                                          db.collection('Judge8').find({}).toArray(function(error8, doc8){
                                              if(error3) {throw error3;res.send(400, error3);}
                                              else{
                                                db.collection('Judge9').find({}).toArray(function(error9, doc9){
                                                    if(error3) {throw error3;res.send(400, error3);}
                                                    else{
                                                      db.collection('Judge10').find({}).toArray(function(error10, doc10){
                                                          if(error3) {throw error3;res.send(400, error3);}
                                                          else{
                                                            db.collection('Judge11').find({}).toArray(function(error11, doc11){
                                                                if(error3) {throw error3;res.send(400, error3);}
                                                                else{
                                                                  db.collection('Judge12').find({}).toArray(function(error12, doc12){
                                                                      if(error3) {throw error3;res.send(400, error3);}
                                                                      else{
                                                                        db.collection('Judge13').find({}).toArray(function(error13, doc13){
                                                                            if(error3) {throw error3;res.send(400, error3);}
                                                                            else{
                                                                              db.collection('Judge14').find({}).toArray(function(error14, doc14){
                                                                                  if(error3) {throw error3;res.send(400, error3);}
                                                                                  else{
                                                                                    doc1.forEach(function (grade) {
                                                                                      totalGrades[grade.team] += parseInt(grade.grades.totalGrades)/judgeCount;
                                                                                    })
                                                                                    doc2.forEach(function (grade) {
                                                                                      totalGrades[grade.team] += parseInt(grade.grades.totalGrades)/judgeCount;
                                                                                    })
                                                                                    doc3.forEach(function (grade) {
                                                                                      totalGrades[grade.team] += parseInt(grade.grades.totalGrades)/judgeCount;
                                                                                    })
                                                                                    doc4.forEach(function (grade) {
                                                                                      totalGrades[grade.team] += parseInt(grade.grades.totalGrades)/judgeCount;
                                                                                    })
                                                                                    doc5.forEach(function (grade) {
                                                                                      totalGrades[grade.team] += parseInt(grade.grades.totalGrades)/judgeCount;
                                                                                    })
                                                                                    doc6.forEach(function (grade) {
                                                                                      totalGrades[grade.team] += parseInt(grade.grades.totalGrades)/judgeCount;
                                                                                    })
                                                                                    doc7.forEach(function (grade) {
                                                                                      totalGrades[grade.team] += parseInt(grade.grades.totalGrades)/judgeCount;
                                                                                    })
                                                                                    doc8.forEach(function (grade) {
                                                                                      totalGrades[grade.team] += parseInt(grade.grades.totalGrades)/judgeCount;
                                                                                    })
                                                                                    doc9.forEach(function (grade) {
                                                                                      totalGrades[grade.team] += parseInt(grade.grades.totalGrades)/judgeCount;
                                                                                    })
                                                                                    doc10.forEach(function (grade) {
                                                                                      totalGrades[grade.team] += parseInt(grade.grades.totalGrades)/judgeCount;
                                                                                    })
                                                                                    doc11.forEach(function (grade) {
                                                                                      totalGrades[grade.team] += parseInt(grade.grades.totalGrades)/judgeCount;
                                                                                    })
                                                                                    doc12.forEach(function (grade) {
                                                                                      totalGrades[grade.team] += parseInt(grade.grades.totalGrades)/judgeCount;
                                                                                    })
                                                                                    doc13.forEach(function (grade) {
                                                                                      totalGrades[grade.team] += parseInt(grade.grades.totalGrades)/judgeCount;
                                                                                    })
                                                                                    doc14.forEach(function (grade) {
                                                                                      totalGrades[grade.team] += parseInt(grade.grades.totalGrades)/judgeCount;
                                                                                    })
                                                                                    setTimeout(function() {
                                                                                      res.send(totalGrades);
                                                                                    }, 500);
                                                                                  }
                                                                              });
                                                                            }
                                                                        });
                                                                      }
                                                                  });
                                                                }
                                                            });
                                                          }
                                                      });
                                                    }
                                                });
                                              }
                                          });
                                        }
                                    });
                                  }
                              });
                            }
                        });
                      }
                  });
                }
            });
          }
      });
    }
  });
}

exports.insertGrades = function(req, res) {
  var userCollection = 'Judge'+req.body.judge,
    teamId = req.body.team,
    newGrades = req.body;
  db.collection(userCollection).findAndModify({team:teamId},{},{$set:newGrades},{upsert:true},function(err, doc) {
      if(err) {throw err;res.send(400, err);}
      else{
        res.send(200,req.body);
      }
  });
}