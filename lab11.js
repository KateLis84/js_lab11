//****Task 1****/
const http = require("http");
const os = require('os')
var path = require('path');
http.createServer( function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'})
	console.log("User: " + os.hostname());
	console.log("Operation System: " + process.platform);
	console.log("Time: " + (os.uptime())/60);
	console.log("File Name: " + path.basename(__filename));
    response.end("User: ");
 }).listen(5000);
 
 // Console will print the message
 console.log('Server running at http://127.0.0.1:5000/');
 

 //Намагалась створити свій модуль, але трохи запуталась, тому краще гляну на розв'язок, і тоді вже спробую сама