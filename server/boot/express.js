//boot/express.js
var express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser');

module.exports = function(app) {
    app.set('views', path.join(__dirname + "/../..", 'public/templates'));
    app.set('view engine', 'html');
    app.engine('html', require('ejs').renderFile);

    app.use(express.static(path.join(__dirname + "/../..", 'public')));
    app.use(cookieParser());

    // app.use(logger('prod'));
};
