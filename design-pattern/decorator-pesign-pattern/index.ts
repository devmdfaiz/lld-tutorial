// Step 1: Component (Base Interface)
interface Coffee {
  getCost(): number;
  getDescription(): string;
}

// Step 2: Concrete Component (Original Object)
class PlainCoffee implements Coffee {
  getCost(): number {
    return 50;
  }

  getDescription(): string {
    return "Plain Coffee";
  }
}

// Step 3: Decorator (Wrapper Base Class)
abstract class CoffeeDecorator implements Coffee {
  protected coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  abstract getCost(): number;
  abstract getDescription(): string;
}

// Step 4: Concrete Decorators (Extra Features)
// -- Milk Decorator
class MilkDecorator extends CoffeeDecorator {
  getCost(): number {
    return this.coffee.getCost() + 20;
  }

  getDescription(): string {
    return this.coffee.getDescription() + ", Milk";
  }
}

// -- Sugar Decorator
class SugarDecorator extends CoffeeDecorator {
  getCost(): number {
    return this.coffee.getCost() + 10;
  }

  getDescription(): string {
    return this.coffee.getDescription() + ", Sugar";
  }
}

// -- Cream Decorator
class CreamDecorator extends CoffeeDecorator {
  getCost(): number {
    return this.coffee.getCost() + 30;
  }

  getDescription(): string {
    return this.coffee.getDescription() + ", Cream";
  }
}

// Step 5: Using Decorator (Chaining)
let coffee: Coffee = new PlainCoffee();

coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);
coffee = new CreamDecorator(coffee);

console.log(coffee.getDescription());
// Plain Coffee, Milk, Sugar, Cream

console.log(coffee.getCost());
// 110

