//Almario Guzman III
//2075 - WCSERVER
//Creating a Functioin

var http = require('http'); // 1 - Import Node.js core module

var server = http.createServer(function(req, res){ // 2 - creating server
    if (req.url == '/') { //check the URL of the current request

        //set response header
        res.writeHead(200, { 'Content-Type': 'text/html'});

        //set response content
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();
    }

    else if (req.url == "/student"){

        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.write('<html><body><p>This is student Page.</p></body></html>');
        res.end();
    }

    else if (req.url == '/admin') {

        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.write('<html><body><p>This is admin Page.</p></body></html>');
        res.end();
    }

    else
        res.end('Invalid Request!')

    

});

server.listen(1000);
console.log('NodeJS localhost at port 1000 is running...')