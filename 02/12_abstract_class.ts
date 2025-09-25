// Abstract Class
abstract class Person {
  constructor(public name: string, public age: number) {}

  abstract getRole(): string; // abstract method

  introduce() {
    console.log(`Hi, I'm ${this.name} and I am ${this.age} years old.`);
  }
}

// Child Class: Student
class Student extends Person {
  constructor(name: string, age: number, public rollNo: number) {
    super(name, age);
  }

  getRole(): string {
    return `I am a Student, Roll No: ${this.rollNo}`;
  }
}

// Child Class: Teacher
class Teacher extends Person {
  constructor(name: string, age: number, public subject: string) {
    super(name, age);
  }

  getRole(): string {
    return `I am a Teacher, Subject: ${this.subject}`;
  }
}

// Usage
const s1 = new Student("Faizan", 15, 101);
const t1 = new Teacher("Mr. Sharma", 40, "Math");

console.log(s1.getRole()); // I am a Student, Roll No: 101
console.log(t1.getRole()); // I am a Teacher, Subject: Math

// ❌ Direct instance of abstract class - ERROR
// const p1 = new Person("Faizan"); // ❌ TypeScript Error
