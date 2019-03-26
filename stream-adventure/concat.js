concatStream = require('concat-stream');

const reverseString = (str) => str.split('').reverse().join('');

process.stdin.pipe(concatStream(function(stream){
   console.log(reverseString(stream.toString()));
}));