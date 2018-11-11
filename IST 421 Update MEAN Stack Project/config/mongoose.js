var config = require('./config'),
mongoose = require('mongoose')
console.log(`Mongoose: ${mongoose.version}`)
MongoClient = require('mongodb').MongoClient;


module.exports = function() {
var db = mongoose.connect(config.db, {useCreateIndex: true, useNewUrlParser: true}).then(
 (res) => {
   console.log("Connected to Database Successfully.")
  }
).catch(() => {
  console.log("Connection to database failed.");
});

MongoClient.connect(config.db,{ useNewUrlParser: true },function(err,db){
  if(err){
      console.log(err);
  }
  else {
      console.log('connected to '+ config.db);
      db.close();
  }
});



require('../app/models/user.server.model');
//require('../app/models/movie.server.model');
return db;
};
