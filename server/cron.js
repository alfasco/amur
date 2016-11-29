var CronJob = require('cron').CronJob;
var request = require('request');
var fs = require('fs'),
	xml2js = require('xml2js');
var path = require('path');
var phantomjs = require('phantomjs')
var childProcess = require('child_process')
var binPath = phantomjs.path;

var download = function(uri, filename, callback) {
	request.head(uri, function(err, res, body) {
		request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
	});
};

var updateShots = new CronJob({
	cronTime: '00 05 21 * * *',
	onTick: function() {
		download('http://portamur.alfasco.ru/api/v1/sitemap/sitemap.xml', __dirname + '/../public/sitemap.xml', function() {
			console.log('done');
			allShots()
		});
	},
	start: true
});

download('http://portamur.alfasco.ru/api/v1/sitemap/sitemap.xml', __dirname + '/../public/sitemap.xml', function() {
	console.log('done');
	allShots()
});

function allShots() {
	var parser = new xml2js.Parser();
	fs.readFile(__dirname + '/../public/sitemap.xml', function(err, data) {
		parser.parseString(data, function(err, result) {
			var n = 0;
			saveShot()

			function saveShot() {
				if (result.urlset.url[n]) {
					var url = result.urlset.url[n].loc[0];
					var childArgs = [
						path.join(__dirname, 'phantom.js'),
						url
					]
					console.log(childArgs);
					childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
						if (url.substr(20) == "") var filename = 'index.html'
						else var filename = url.substr(20) + '.html';

						fs.writeFile(__dirname + '/routes/shots/' + filename, stdout, function(err) {
							if (err) {
								return console.log(err);
							}
							n++;
							saveShot();
						});
					});
				} else console.log('finish', new Date())
			}
		});
	});
}
