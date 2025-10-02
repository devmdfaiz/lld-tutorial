class Person {
    constructor(public name: string) {}
    introduce() {
        console.log(`Hi, I am ${this.name}`);
    }
}

class Student extends Person {
    constructor(name: string, public rollNo: number) {
        super(name);
    }
}

class Teacher extends Person {
    constructor(name: string, public subject: string) {
        super(name);
    }
}

const s1 = new Student("Faizan", 101);
const t1 = new Teacher("Mr. Sharma", "Math");

s1.introduce(); // Hi, I am Faizan
t1.introduce(); // Hi, I am Mr. Sharma