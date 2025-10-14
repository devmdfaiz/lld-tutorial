// Liskov Substitution Principle

// Bad example
// class Bird {
//   fly() {
//     console.log("Flying...");
//   }
// }

// class Penguin extends Bird {
//   fly() {
//     throw new Error("Penguins can't fly!");
//   }
// }

abstract class Bird {
  abstract move(): void;
}

class Sparrow extends Bird {
  move() {
    console.log("Flying...");
  }
}

class Penguin extends Bird {
  move() {
    console.log("Swimming...");
  }
}
