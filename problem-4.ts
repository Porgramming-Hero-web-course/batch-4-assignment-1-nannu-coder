interface Circle {
  shape: "circle";
  radius: number;
}

interface Rectangle {
  shape: "rectangle";
  width: number;
  height: number;
}

const calculateShapeArea = (shape: Circle | Rectangle): number => {
  const pi: number = 3.141592653589793;
  if (shape.shape === "circle") {
    return parseFloat((pi * shape.radius * shape.radius).toFixed(2));
  } else if (shape.shape === "rectangle") {
    return shape.width * shape.height;
  } else {
    throw new Error("Unknown shape type");
  }
};

// const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// const rectangleArea = calculateShapeArea({
//   shape: "rectangle",
//   width: 4,
//   height: 6,
// });

// console.log(rectangleArea);
