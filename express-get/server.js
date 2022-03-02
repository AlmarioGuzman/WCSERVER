//Name: Almario Guzman III
//Activity Name: server.js
//Description:

var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/index.html', function (req , res){
    res.sendFile(__dirname + "/" + "index.html");
});

app.get('/process_get', function (req,res){
    //Prepare output in JSON format
    response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name,
        stud_course: req.query.stud_course
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(5000, function () {
    var host = server.address().address;
    var post = server.address().port;
    
    console.log("Example app listening at http://%s:%s", host, post);
});