const { response } = require("Express");
var express = require("Express");

var app = express();
app.get("/", function(request, response){
  response.send("Hello World!");
});

app.listen(3000, function(){
  console.log('server running at http://localhost:3000');
})