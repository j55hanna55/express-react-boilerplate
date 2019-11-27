const path = require('path')
const express = require('express')
const data = require('./db/fakedata.json')
const app = express()
var mongojs = require("mongojs");

var PORT = process.env.PORT || 3001;

app.use(express.urlencoded())

app.get("/api/all", (req, res) => {
  console.log(req.headers['user-agent'])
  res.json(data)
})

if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
  })
}

var databaseUrl = process.env.MONGODB_URI || "boilerplate";
var collections = ["userInfo"];

var db = mongojs(databaseUrl, collections);


db.on("error", function (error) {
  console.log("Database Error:", error);
});


app.get("/userInfo", function(req,res){
  db.userInfo.find({}, function(error, result){
    res.json(result);
  })
})

app.post("/userInfo", function (req, res) {
  console.log(req.body)

  db.userInfo.insert({ 
    userFirstName: req.body.userFirstName, 
    userLastName: req.body.userLastName, 
    userName: req.body.userName, 
    userPassword: req.body.userPassword, 
    userEmail: req.body.userEmail 
  }, function (error, savedUserInfo) {
    // Log any errors
    if (error) {
      console.log(error);
    } else {
      //the reason why we are sending the savedSong back is because we now have an _id to give to the client
      res.json(savedUserInfo);
    }
  });
});




app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})