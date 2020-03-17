var express = require('express');
var app = express();
var env  = process.env;
var port = env.OPENSHIFT_NODEJS_PORT || 5000;
var host = env.OPENSHIFT_NODEJS_IP || '192.168.1.188';

// IMPORTANT: Your application HAS to respond to GET /health with status 200
//            for OpenShift health monitoring
app.get('/health', function (req, res) {
  res.send(200);
});
app.use(express.static(__dirname + '/'));
app.listen(port, host, function () {
  console.log( "Listening on " + host + ", port " + port )
});
