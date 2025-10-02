class Wife {
    constructor(public husband?: Husband) {}
}

class Husband {
    constructor(public wife?: Wife) {}
}

const h = new Husband();
const w = new Wife();

h.wife = w;
w.husband = h;