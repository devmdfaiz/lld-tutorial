class Student {
    constructor(public name: string) {}
}

class Teacher {
    constructor(public student: Student[] = []) {}

    addStudent(student: Student) {
        this.student.push(student);
    }
}

const s1 = new Student("Faizan");

const t1 = new Teacher();
t1.addStudent(s1);