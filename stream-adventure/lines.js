var split = require('split');
var through2 = require('through2');


process.stdin
    .pipe(split())
    .pipe(through2(function (line, _, next) {
        let str = line.toString();
        str = ++i % 2 === 0
            ? str.toString().toUpperCase() 
            : str.toString().toLowerCase();
        this.push(str + "\n");
        next();
})).pipe(process.stdout);
