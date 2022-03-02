
//Activity Name: server.js
//Author Name: Almario Guzman III
//Section and Code: WD-201

var express = require('express');
var app = express();

app.get('/', function (req, res){
  console.log("There is GET request for the homepage!");
  res.send('Here is the GET Method!')
})

app.post('/', function (req, res){
  console.log("A POST request for the homepage is accessed.");
  res.send('Here is the POST Method!')
})

app.get('/list_user', function (req, res){
  console.log("There is GET request for /list_user!");
  res.send('This is the page Listing')
})

app.get('/', function (req, res){
  console.log("Got a GET request for /ab*cd");
  res.send('Pattern match page')
})

var server = app.listen(4000, function () {
    var host = server.address().address
    var post = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, post)
})