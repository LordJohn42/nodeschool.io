function reduce(arr, fn, initial) {
    if (!arr.length) return initial;
    var hd = arr.shift();
    return reduce(arr, hd, fn(initial, head));
}
  
module.exports = reduce