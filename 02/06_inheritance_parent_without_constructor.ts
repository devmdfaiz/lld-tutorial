class School {
    intro(): void {
        console.log("🏫 School: ABC School, 📍 Location: Pune");
    }
}

class Student extends School {
    constructor(public name: string, public age: number) {
        super();
    }

    getStudentDetails(): void {
        console.log(`👤 Student: ${this.name}, 📅 Age: ${this.age}`);
    }
}

const s1 = new Student("Faizan", 22);

s1.intro();
s1.getStudentDetails();
