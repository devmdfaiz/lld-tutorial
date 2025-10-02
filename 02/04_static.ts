// Stateless
class MathUtils {
  constructor (public isCircle: boolean) {};

  getArea(radius: number): number {
    return this.isCircle ? Math.PI * radius * radius : 0;
  }

  static PI = 3.14;

  static add(a: number, b: number) {
    return a + b;
  }
}

console.log(MathUtils.PI);        // 3.14
console.log(MathUtils.add(2, 3)); // 5

const u = new MathUtils(true);
console.log(u.getArea(5)); // 78.53981633974483
