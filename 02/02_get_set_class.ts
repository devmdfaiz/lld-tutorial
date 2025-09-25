interface Student {
  name: string;
  age: number;
  grade: string;
}

class School {
  name: string;
  location: string;
  capacity: number;
  private _students: Student[];
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
    this._students = [];
  }

  getDetails(): void {
    console.log(
      `🏫 School: ${this.name}, 📍 Location: ${this.location}, 👥 Capacity: ${this.capacity}, Currently Enrolled: ${this.currentStudents}`
    );
  }

  get students(): Student[] {
    return this._students;
  }

  set students(student: Student) {
    if(this.currentStudents < this.capacity) {
      this._students.push(student);
      this.currentStudents++;
    } else {
      console.log("🚫 School is full!");
    }
  }
}

const school = new School("ABC School", "Pune");

school.getDetails();
console.log(school.students);

school.students = { name: "Faizan", age: 22, grade: "A" };

school.getDetails();
console.log(school.students);

school.students = { name: "John", age: 26, grade: "B" };