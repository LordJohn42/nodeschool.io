var combine = require('stream-combiner');
var through = require('through2');
var split   = require('split');
var zlib    = require('zlib');
    
module.exports = function () {
    var booksByGenres;

    return combine(
        // read newline-separated json,
        process.stdin.pipe(split()),
        // group books into genres,
        through(write, end),
        // then gzip the output
        zlib.createGzip()
    )

    function write (chunk, _, next) {
        if (chunk.length === 0) return next()
        
        let line = JSON.parse(chunk);

        if (line.type === 'genre') {
            if (booksByGenres) this.push(JSON.stringify(booksByGenres) + '\n');
            booksByGenres = {name:line.name, books: []};
        } else if (line.type === 'book') {
            booksByGenres.books.push(line.name);
        }
        next();
    }
    function end(done) {
        console.log(booksByGenres);
        if (booksByGenres) this.push(JSON.stringify(booksByGenres) + '\n');
        done();
    }
}
