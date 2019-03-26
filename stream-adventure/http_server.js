var http = require('http');
var fs = require('fs');
var  through = require('through2');

var server = http.createServer(function(req, res) {
    if (req.method === 'POST') {
        req.pipe(through(function(chunk, enc, callback) {
            // Be carefull with this.
            this.push(chunk.toString().toUpperCase());
            callback();
        })).pipe(res);
    }
});
server.listen(process.argv[2]);