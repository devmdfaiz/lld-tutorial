class House {
    constructor(public name: string) {}
}

class Room {
    constructor(public house: House, public number: number) {}
}

const h1 = new House('My House');
const r1 = new Room(h1, 101);