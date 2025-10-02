class Room {
    constructor(public number: number) {}
}

class Bed {
    constructor(public room: Room[]) {}
}

const r1 = new Room(101);
const r2 = new Room(102);

const b1 = new Bed([r1, r2]);
