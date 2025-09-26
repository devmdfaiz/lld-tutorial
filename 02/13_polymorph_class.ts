abstract class Shape {
  // Abstract method: har shape apna drawing logic dega
  abstract draw(): void;
}

class Circle extends Shape {
  draw(): void {
    console.log("Drawing a Circle 🟢");
  }
}

class Square extends Shape {
  draw(): void {
    console.log("Drawing a Square ⬛");
  }
}

class Triangle extends Shape {
  draw(): void {
    console.log("Drawing a Triangle 🔺");
  }
}

// Usage
let shapes: Shape[] = [new Circle(), new Square(), new Triangle()];

for (let shape of shapes) {
  shape.draw(); // Same method name, different outputs
}

// Output:
// Drawing a Circle 🟢
// Drawing a Square ⬛
// Drawing a Triangle 🔺
