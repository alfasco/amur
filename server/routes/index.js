var request = require('request');
module.exports = function(app) {
    //Главная
    app.get('*', function(req, res) {
        res.render('index.html');
    });
};
