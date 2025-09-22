// Notification strategy interface

// Define ts interface contract
interface NotificationStrategy {
  send(to: string, message: string): Promise<void>;
}

class EmailStrategy implements NotificationStrategy {

  async send(to: string, message: string) {
    // send email logic (smtp / 3rd party)
    console.log(`Email to ${to}: ${message}`);
  }
}

class SMSStrategy implements NotificationStrategy {
  async send(to: string, message: string) {
    // send sms logic
    console.log(`SMS to ${to}: ${message}`);
  }
}

// Notifier uses a strategy — simple and testable
class Notifier {
  constructor(private strategy: NotificationStrategy) {}
  setStrategy(s: NotificationStrategy) { this.strategy = s; }
  async notify(to: string, message: string) {
    await this.strategy.send(to, message);
  }
}

// Usage
const notifier = new Notifier(new EmailStrategy());

await notifier.notify("faizan@example.com", "Your booking is confirmed");

// Later change to SMS
notifier.setStrategy(new SMSStrategy());
await notifier.notify("+91xxxx", "Your booking is confirmed");
