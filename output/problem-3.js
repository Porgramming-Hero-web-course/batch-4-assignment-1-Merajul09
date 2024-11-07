{
    var countWordOccurrences = function (paragraph, check) {
        var result = paragraph
            .toLowerCase()
            .replace(/[$&+,:;=?@#|'<>.-^*()%!]/g, " ")
            .split(" ");
        var res = result.filter(function (s) { return s === check; });
        return res.length;
    };
    console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"));
    console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "great"));
}
