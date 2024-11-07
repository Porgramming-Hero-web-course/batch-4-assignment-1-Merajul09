{
  //
  type CircleAreaRequire = {
    shape: "circle";
    radius: number;
  };
  type RectangleAreaRequire = {
    shape: "rectangle";
    width: number;
    height: number;
  };
  type All = CircleAreaRequire | RectangleAreaRequire;

  const calculateShapeArea = (area: All) => {
    if (area.shape === "circle") {
      const result = 3.1416 * (area.radius * area.radius);
      return result.toFixed(2);
    } else if (area.shape === "rectangle") {
      return area.width * area.height;
    }
  };
  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  //
}
