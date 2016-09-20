var http = require('http');

(function() {
    http.createServer(function (request, response) {
        response.end('<h1>got it!!!!</h1>');
    }).listen(8000, function () {
        console.log('employee');
    });
})();