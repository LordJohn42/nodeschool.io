var duplexer = require('duplexer2');
var through  = require('through2').obj;

module.exports = function (counter) {
    var counts = {};

    var stream = duplexer({objectMode: true}, through(function (chunk, _, callback){
        // if(!counts.hasOwnProperty(chunk.country)) {
        //     counts[chunk.country] = 0;
        // }
        // if (counts.hasOwnProperty(chunk.country)) {
        //     counts[chunk.country] = counts[chunk.country] + 1;  
        // }
        counts[chunk.country] = (counts[chunk.country] || 0) + 1;
        callback();
    }, function(done){
        console.log(counts);
        counter.setCounts(counts);
    }), counter);
    return stream;
    // return a duplex stream to count countries on the writable side
    // and pass through `counter` on the readable side
};
