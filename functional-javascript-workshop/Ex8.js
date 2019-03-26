function duckCount() {
    if (arguments.length <= 0) {
        return 0;
      }
      var args = Array.prototype.slice.call(arguments, 1);
      console.log(args);
      var remaining = duckCount.apply(null, args);
    return (Object.prototype.hasOwnProperty.call(arguments[0], 'quack') ? 1 : 0) + remaining;
}

module.exports = duckCount