// System require API: Client
// send(message: string)

// But third party SDK provides: Adaptee
// pushMessage(payload)

interface Notification {
  send(message: string): void;
}

// Third party SDK
class WhatsAppSDK {
  pushMessage(payload: { text: string; priority: number }) {
    console.log("WhatsApp message sent:", payload);
  }
}

// Our Adapter
class WhatsAppAdapter implements Notification {

  constructor(private whatsapp: WhatsAppSDK) { }

  send(message: string): void {
    // Interface translation
    this.whatsapp.pushMessage({
      text: message,
      priority: 1,
    });
  }
}

// Usage
function notifyUser(notification: Notification) {
  notification.send("Your OTP is 123456");
}