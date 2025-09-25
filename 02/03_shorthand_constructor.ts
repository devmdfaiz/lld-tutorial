class Student {
  constructor(
    public name: string, 
    private rollNo: number, 
    readonly college: string
  ) {}

  details() {
    console.log(`${this.name} (Roll: ${this.rollNo}) studies at ${this.college}`);
  }
}

const s1 = new Student("Aman", 101, "IIT Delhi");
s1.details();
// Aman (Roll: 101) studies at IIT Delhi

console.log(s1.name);      // allowed (public)
console.log(s1.college);   // allowed (readonly)
// console.log(s1.rollNo); // ❌ Error (private)
