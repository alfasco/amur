var fs = require('fs'),
	xml2js = require('xml2js');

module.exports = function(app) {
	//Главная
	app.get('*', function(req, res) {
		//Определяем, что отдать
		if (req.headers['user-agent']) {
			if (req.headers['user-agent'].indexOf('bot') >= 0 || req.headers['user-agent'].indexOf('Seopult') >= 0 || req.headers['user-agent'].indexOf('Rambler') >= 0) {
				// console.log(req.headers['user-agent'], req.url);
				//Проверяем наличие страницы
				var parser = new xml2js.Parser();
				fs.readFile(__dirname + '/../../../public/sitemap.xml', function(err, data) {
					parser.parseString(data, function(err, result) {
						for (i in result.urlset.url) {
							if (result.urlset.url[i].loc[0].substr(19) == decodeURI(req.url)) var check = true;
						}

						if (check) {
							if (req.url == '/') var filename = 'index.html'
							else var filename = decodeURI(req.url).substr(1) + '.html'
							res.sendFile(__dirname + '/shots/' + filename)
						} else {
							//Выдаем ошибку 404
							res.status(404).send('Ошибка');
						}
					})
				});
			} else {
				res.render('index.html');
			}
		} else res.render('index.html');
	});
};
