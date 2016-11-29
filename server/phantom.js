var page = require('webpage').create(),
    system = require('system');

page.settings.userAgent = 'MyAgent'
var address = system.args[1];

page.open(address, function(status) {
    if (status === "success") {
        setTimeout(function() {
            // page.render('example.pdf');
            var content = page.content;
            console.log(content);

            phantom.exit();
        }, 3000)
    }
});
