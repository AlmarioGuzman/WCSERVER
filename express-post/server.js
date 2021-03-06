//Name: Almario Guzman III
//Activity Name: server.js
//Description:

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({extended: false})

app.use(express.static('public'));
app.get('/index.html', function (req , res){
    res.sendFile(__dirname + "/" + "index.html");
})

app.post('/process_post', urlencodedParser, function (req, res){
    //Prepare output in JSON format
    response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        stud_course:req.body.stud_course,
        age:req.body.age,
        comments:req.body.comments
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(8080, function () {
    var host = server.address().address
    var post = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, post)
})