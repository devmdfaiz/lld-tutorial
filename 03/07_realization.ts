interface Payment {
    pay(amount: number): void;
}

class CreditCardPayment implements Payment {
    pay(amount: number) {
        console.log(`Paid ${amount} using Credit Card`);
    }
}

class PayPalPayment implements Payment {
    pay(amount: number) {
        console.log(`Paid ${amount} using PayPal`);
    }
}

const payment: Payment = new CreditCardPayment();
payment.pay(100);

const payment2: Payment = new PayPalPayment();
payment2.pay(100);