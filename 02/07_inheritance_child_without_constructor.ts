class School {
    constructor(readonly name: string, readonly location: string) {}

    getSchoolDetails(): void {
        console.log(`🏫 School: ${this.name}, 📍 Location: ${this.location}`);
    }
}

class Student extends School {}

const s1 = new Student("ABC School", "Pune");
s1.getSchoolDetails();
