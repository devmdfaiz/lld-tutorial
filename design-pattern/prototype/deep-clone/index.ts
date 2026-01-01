interface Cloneable<T> {
  clone(): T;
}

type Skill = {
  name: string;
  damage: number;
};

class GameCharacter implements Cloneable<GameCharacter> {
  name: string;
  health: number;
  skills: Skill[];

  constructor(name: string, health: number, skills: Skill[]) {
    this.name = name;
    this.health = health;
    this.skills = skills;
  }

  clone() {
    // Creates a deep copy of the current object so that
    // nested objects/arrays are not shared between clones
    return structuredClone(this);
  }
}

const baseMage = new GameCharacter("Mage", 100, [
  { name: "Fireball", damage: 30 }
]);

const mage1 = baseMage.clone();
const mage2 = baseMage.clone();

mage1.skills.push({ name: "Ice Blast", damage: 20 });
mage1.health = 80;
