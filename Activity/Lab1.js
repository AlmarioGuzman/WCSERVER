//Almario Guzman III
//2075 - WCSERVER
//Laboratory Activity: Creating Node.js Application

var http = require('http'); 

var server = http.createServer(function(john, smith){ 
    if (john.url == '/') { 
        smith.writeHead(200, { 'Content-Type': 'text/html'});
        smith.write('<html><body><h2>Welcome to my Node.js Application.</h2></body></html>');
        smith.write('<html><body><p>Welcome John Smith. This is an activity about basics of Node.js</p></body></html>');
        smith.write('<html><head><style>footer{position: fixed;left: 0;bottom: 0;width: 100%;text-align: center;}</style></head><body><footer><p>Almario Guzman III | WD-201 | Febuary 2, 2022 | 2075 - WCSERVER | Laboratory Activity: Creating Node.js Application</p></footer></body></html>');
        smith.end();
    }
    else if (john.url == "/about"){
        smith.writeHead(200, { 'Content-Type': 'text/html'});
        smith.write('<html><body><h3>This is the About Page.</h3></body></html>');
        smith.write('<html><body><p>Hello John Smith. This activity teach you to deal with a simple server and local modules in node.js</p></body></html>');
        smith.write('<html><head><style>footer{position: fixed;left: 0;bottom: 0;width: 100%;text-align: center;}</style></head><body><footer><p>Almario Guzman III | WD-201 | Febuary 2, 2022 | 2075 - WCSERVER | Laboratory Activity: Creating Node.js Application</p></footer></body></html>');
        smith.end();
    }
    else if (john.url == '/contact') {
        smith.writeHead(200, { 'Content-Type': 'text/html'});
        smith.write('<html><body><h3>This is the Contact Page.</h3></body></html>');
        smith.write('<html><body><p>John Smith, if you want additional details about this activity go to this site: https//www.tutorialsteacher.com/nodejs/nodejs-tutorials.</p></body></html>');
        smith.write('<html><head><style>footer{position: fixed;left: 0;bottom: 0;width: 100%;text-align: center;}</style></head><body><footer><p>Almario Guzman III | WD-201 | Febuary 2, 2022 | 2075 - WCSERVER | Laboratory Activity: Creating Node.js Application</p></footer></body></html>');
        smith.end();
    }
    else if (john.url == '/gallery') {
        smith.writeHead(200, { 'Content-Type': 'text/html'});
        smith.write('<html><body><h3>This is the Gallery Page.</h3></body></html>');
        smith.write('<html><head><style>footer{position: fixed;left: 0;bottom: 0;width: 100%;text-align: center;}</style></head><body><footer><p>Almario Guzman III | WD-201 | Febuary 2, 2022 | 2075 - WCSERVER | Laboratory Activity: Creating Node.js Application</p></footer></body></html>');
        smith.end();
    }
    else
        smith.end('Invalid Request!')
});
server.listen(10000);
console.log('NodeJS localhost at port 10000 is running...')