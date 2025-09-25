// Stateless
class MathUtils {
  static PI = 3.14;

  static add(a: number, b: number) {
    return a + b;
  }
}

console.log(MathUtils.PI);        // 3.14
console.log(MathUtils.add(2, 3)); // 5
