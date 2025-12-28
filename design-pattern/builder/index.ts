// With Builder Pattern

// Raw class
class Burger {
  private readonly bunType: string;
  private readonly pattyType: string;
  private readonly cheese: boolean;
  private readonly onion: boolean;
  private readonly sauce: string | null;
  private readonly size: "small" | "medium" | "large";

  constructor(builder: BurgerBuilder) {
    this.bunType = builder.bunType;
    this.pattyType = builder.pattyType;
    this.cheese = builder.cheese;
    this.onion = builder.onion;
    this.sauce = builder.sauce;
    this.size = builder.size;
  }

    prepareBurger(): void {
    console.log(`🔥 Starting burger preparation...`);

    console.log(`🍞 Using ${this.bunType} bun`);
    console.log(`🥩 Adding ${this.pattyType} patty`);

    if (this.cheese) {
      console.log(`🧀 Adding cheese`);
    }

    if (this.onion) {
      console.log(`🧅 Adding onions`);
    }

    if (this.sauce) {
      console.log(`🥫 Adding ${this.sauce} sauce`);
    }

    console.log(`📏 Size selected: ${this.size}`);
    console.log(`✅ Burger is cooked and ready to serve!`);
  }
}

// Burger Builder
class BurgerBuilder {
  // required
  readonly bunType: string;

  // optional (with defaults)
  pattyType: string = "veg";
  cheese: boolean = false;
  onion: boolean = false;
  sauce: string | null = null;
  size: "small" | "medium" | "large" = "medium";

  constructor(bunType: string) {
    this.bunType = bunType;
  }

  addPatty(type: string) {
    this.pattyType = type;
    return this;
  }

  addCheese() {
    this.cheese = true;
    return this;
  }

  addOnion() {
    this.onion = true;
    return this;
  }

  addSauce(sauce: string) {
    this.sauce = sauce;
    return this;
  }

  setSize(size: "small" | "medium" | "large") {
    this.size = size;
    return this;
  }

  build() {
    return new Burger(this);
  }
}

// Simple Burger
const burger1: Burger = new BurgerBuilder("wheat").build();
burger1.prepareBurger();

// Cheese Burger
const burger2: Burger = new BurgerBuilder("brown").addCheese().build();
burger2.prepareBurger();

// Fully loaded burger
const burger3: Burger = new BurgerBuilder("wheat")
  .addPatty("chicken")
  .addPatty("beef")
  .addCheese()
  .addOnion()
  .addSauce("mayo")
  .setSize("large")
  .build();

burger3.prepareBurger();
