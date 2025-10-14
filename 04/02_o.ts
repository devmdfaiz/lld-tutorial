// Open/Closed Principle

// Bad example
// function calculateDiscount(type: string, price: number) {
//   if (type === "regular") return price * 0.9;
//   if (type === "premium") return price * 0.8;
//   if (type === "gold") return price * 0.7; // naye feature ke liye modify
// }

interface Discount {
  apply(price: number): number;
}

class RegularDiscount implements Discount {
  apply(price: number) {
    return price * 0.9;
  }
}

class PremiumDiscount implements Discount {
  apply(price: number) {
    return price * 0.8;
  }
}

class GoldDiscount implements Discount {
  apply(price: number) {
    return price * 0.7;
  }
}

function getFinalPrice(discount: Discount, price: number) {
  return discount.apply(price);
}
