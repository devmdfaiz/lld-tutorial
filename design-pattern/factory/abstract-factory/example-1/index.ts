// Step 1: Common Interfaces
interface NotificationSender {
  send(message: string): void;
}

interface NotificationFormatter {
  format(message: string): string;
}

// Step 2: Concrete Implementations
class EmailSender implements NotificationSender {
  send(message: string) {
    console.log("Email sent:", message);
  }
}

class EmailFormatter implements NotificationFormatter {
  format(message: string) {
    return `[EMAIL]: ${message}`;
  }
}

class SmsSender implements NotificationSender {
  send(message: string) {
    console.log("SMS sent:", message);
  }
}

class SmsFormatter implements NotificationFormatter {
  format(message: string) {
    return `[SMS]: ${message}`;
  }
}

// Step 3: Abstract Factory (MOST IMPORTANT PART)
interface NotificationFactory {
  createSender(): NotificationSender;
  createFormatter(): NotificationFormatter;
}

// Step 4: Concrete Factories
class EmailNotificationFactory implements NotificationFactory {
  createSender() {
    return new EmailSender();
  }

  createFormatter() {
    return new EmailFormatter();
  }
}


class SmsNotificationFactory implements NotificationFactory {
  createSender() {
    return new SmsSender();
  }

  createFormatter() {
    return new SmsFormatter();
  }
}

// Step 5: Client Code (Magic here)
function sendNotification(factory: NotificationFactory, message: string) {
  const sender = factory.createSender();
  const formatter = factory.createFormatter();

  const formattedMessage = formatter.format(message);
  sender.send(formattedMessage);
}

const emailFactory = new EmailNotificationFactory();
sendNotification(emailFactory, "Hello Faizan");

const smsFactory = new SmsNotificationFactory();
sendNotification(smsFactory, "OTP 1234");

