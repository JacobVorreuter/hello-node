var http = require('http'),
    sys = require('sys');

var port = parseInt(process.env['PORT']);

http.createServer(function (req, res) {
  console.log("request..." + sys.inspect(req));
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Packet one\n');
  res.end('Hello World\n');
}).listen(port, "0.0.0.0");
console.log('Server bound to port ' + port.toString());
