{
    var calculateShapeArea = function (area) {
        if (area.shape === "circle") {
            var result = 3.1416 * Math.ceil(area.radius * area.radius);
            return result.toFixed(2);
        }
        else if (area.shape === "rectangle") {
            return area.width * area.height;
        }
    };
    var circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    var rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    console.log(circleArea, rectangleArea);
}
