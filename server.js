var http = require('http'),
    sys = require('sys');

var port = parseInt(process.env['PORT']);

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  req.onBody = function(chunk) {
    res.write(chunk);
  } 
  req.onBodyComplete = function() {
    res.end("body complete");
  }
}).listen(port, "0.0.0.0");
console.log('Server bound to port ' + port.toString());
