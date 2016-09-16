var cluster = require('cluster'),
	numCPUs = require('os').cpus().length,
	express = require('express'),
	app = express(),
	config = require("nconf");

config.argv()
	.env()
	.file({
		file: 'config.json'
	});

require('./boot/express')(app);
// routing
require('./routes/index')(app);

if (cluster.isMaster) {

	// Fork workers.
	for (var i = 0; i < numCPUs; i++) {
		cluster.fork();
	}

	cluster.on('exit', function(worker, code, signal) {
		console.log('worker ' + worker.process.pid + ' died');
	});
} else {
	var server = app.listen(config.get('server:httpPort'), function() {

		var host = server.address().address;
		var port = server.address().port;
	})
}
