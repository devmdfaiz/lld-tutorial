// Strategy type
type NotificationStrategy = (to: string, message: string) => Promise<void>;

// Concrete strategies
const emailStrategy: NotificationStrategy = async (to, message) => {
  // Email sending logic (SMTP / 3rd party)
  console.log(`Email to ${to}: ${message}`);
};

const smsStrategy: NotificationStrategy = async (to, message) => {
  // SMS sending logic
  console.log(`SMS to ${to}: ${message}`);
};

// Notifier as a functional object
function createNotifier(initialStrategy: NotificationStrategy) {
  let strategy = initialStrategy;

  return {
    // Object method shorthand syntax since ES6
    setStrategy(newStrategy: NotificationStrategy) {
      strategy = newStrategy;
    },
    async notify(to: string, message: string) {
      await strategy(to, message);
    }
  };
}

// Usage
const notifier = createNotifier(emailStrategy);

await notifier.notify("faizan@example.com", "Your booking is confirmed");

// Later change to SMS
notifier.setStrategy(smsStrategy);
await notifier.notify("+91xxxx", "Your booking is confirmed");
