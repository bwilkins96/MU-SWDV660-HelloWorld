var http = require("http");

http.createServer(function (request, response) {

   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});

   let responseStr = 'Hey Earth!\n\n-------------\nBen was here!\n-------------\n';
   responseStr += '\nUpdated for week 3 Ansible Playbook assignment\n';
   
   // Send the response body
   response.end(responseStr);
}).listen(3333);

// Console will print the message
console.log('Server running');