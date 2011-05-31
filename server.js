var http = require('http'),
    sys = require('sys');

var port = parseInt(process.env['PORT']);

http.createServer(function (req, res) {
  console.log("req start");
 /* req.on('data', function(chunk) {
    console.log("body recvd");
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(chunk + '\n');
  });
  req.on('end', function() {
    res.end("body complete\n");
  });*/
}).listen(port, "0.0.0.0");
console.log('Server bound to port ' + port.toString());
