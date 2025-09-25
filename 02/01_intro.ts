interface Student {
  name: string;
  age: number;
  grade: string;
}

class School {
  name: string;
  location: string;
  capacity: number;
  private students: Student[];
  private currentStudents: number;

  constructor(
    name: string,
    location: string,
    capacity?: number,
    currentStudents?: number
  ) {
    this.name = name;
    this.location = location;
    this.capacity = capacity || 1;
    this.currentStudents = currentStudents || 0;
    this.students = [];
  }

  getDetails(): void {
    console.log(
      `🏫 School: ${this.name}, 📍 Location: ${this.location}, 👥 Capacity: ${this.capacity}, Currently Enrolled: ${this.currentStudents}`
    );
  }

  getStudents(): Student[] {
    return this.students;
  }

  addStudent(student: Student): void {
    if(this.currentStudents < this.capacity) {
      this.students.push(student);
      this.currentStudents++;
    } else {
      console.log("🚫 School is full!");
    }
  }
}

const school = new School("ABC School", "Pune");

school.getDetails();
console.log(school.getStudents());

school.addStudent({ name: "Faizan", age: 22, grade: "A" });

school.getDetails();
console.log(school.getStudents());

school.addStudent({ name: "John", age: 26, grade: "B" });