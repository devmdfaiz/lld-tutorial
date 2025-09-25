class Student {
  constructor(public name: string, public rollNo: number) {}

  // Overloads
  getDetails(): string;
  getDetails(format: "short"): string;
  getDetails(format: "long"): string;

  // Implementation
  getDetails(format?: "short" | "long"): string {
    if (format === "short") {
      return `${this.name}`;
    } else if (format === "long") {
      return `Name: ${this.name}, Roll No: ${this.rollNo}`;
    }
    return `Student Info`;
  }
}

const st = new Student("Faizan", 101);

console.log(st.getDetails());        // Student Info
console.log(st.getDetails("short")); // Faizan
console.log(st.getDetails("long"));  // Name: Faizan, Roll No: 101
