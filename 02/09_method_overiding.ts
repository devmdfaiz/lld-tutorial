class School {
    constructor(readonly name: string, readonly location: string) {}

    getDetails(): void {
        console.log(`🏫 School: ${this.name}, 📍 Location: ${this.location}`);
    }
}

class Student extends School {
    constructor(schoolName: string, schoolLocation: string, public name: string, public age: number) {
        // Call parent constructor
        // Imagine like this new School(schoolName, schoolLocation);
        super(schoolName, schoolLocation);
    }

    getDetails(): void {
        console.log(`👤 Student: ${this.name}, 📅 Age: ${this.age}`);
    }
}

const s1 = new Student("ABC School", "Pune", "Faizan", 22);
s1.getDetails();
