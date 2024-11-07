{
    var removeDuplicates = function (numbers) {
        var result = numbers.filter(function (num, index) { return numbers.indexOf(num) === index; });
        return result.sort(function (a, b) { return a - b; });
    };
    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 9, 12, 10, 8, 9, 8]));
}
