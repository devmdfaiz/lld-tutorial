interface Cloneable<T> {
  clone(): T;
}

class GameCharacter implements Cloneable<GameCharacter> {
  constructor(
    public name: string,
    public health: number,
    public attackPower: number,
    public weapon: string,
    public speed: number
  ) { }

  clone(): GameCharacter {
    return new GameCharacter(
      this.name,
      this.health,
      this.attackPower,
      this.weapon,
      this.speed
    );
  }
}

const baseZombie = new GameCharacter(
  "Zombie",
  100,
  15,
  "Hands",
  2
);

const fastZombie = baseZombie.clone();
fastZombie.speed = 5;
fastZombie.health = 80;

const strongZombie = baseZombie.clone();
strongZombie.attackPower = 30;
strongZombie.health = 150;

const bossZombie = baseZombie.clone();
bossZombie.health = 500;
bossZombie.attackPower = 60;
bossZombie.weapon = "Hammer";


