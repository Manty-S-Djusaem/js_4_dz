function compareNumbers(arr) {
    var arr = arr.sort(function (a, b) { return b - a })
    document.writeln(arr)
}

var numbers = [3, 8, 7, 6, 5, -4, 3, 2, 1];

compareNumbers(numbers);
console.log(numbers );


