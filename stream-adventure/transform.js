var stream_map = require('through2-map');

// Dirty hack
process.stdin.pipe(stream_map(function(buffer){
    return buffer.toString().toUpperCase();
})).pipe(process.stdout);

