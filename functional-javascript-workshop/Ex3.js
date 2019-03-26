// Convert to array map.
// function doubleAll(numbers) {
//     var result = [];
//     for (var i = 0; i < numbers.length; i++) {
//       result.push(numbers[i] * 2)
//     }
//     return result
// }
function doubleAll(numbers) {
    var result = [];
    return numbers.map(value => {
        return value * 2;
    })
}

module.exports = doubleAll;