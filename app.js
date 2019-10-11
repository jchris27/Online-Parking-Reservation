//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const port = 3000;
const app = express();

//to serve up static files: css and images
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/reserve", function(req, res){
  res.sendFile(__dirname + "/guest.html");
});

app.listen(port,function(){
  console.log("Server running on port 3000!");
});
