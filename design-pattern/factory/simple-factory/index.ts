interface Notification {
    send(message: string): void;
}

class EmailNotificationSend implements Notification {
    send(message: string): void {
        console.log(`Sending Email Notification: ${message}`)
    }
}

class SmsNotificationSend implements Notification {
    send(message: string): void {
        console.log(`Sending SMS Notification: ${message}`)
    }
}


class WhatsappNotificationSend implements Notification {
    send(message: string): void {
        console.log(`Sending Whatsapp Notification: ${message}`)
    }
}

class NotificationFactory {
    public static createNotification(type: "email" | "whatsapp" | "sms"): Notification {
        switch(type) {
            case "email":
                return new EmailNotificationSend();
            case "whatsapp":
                return new WhatsappNotificationSend();
            case "sms":
                return new SmsNotificationSend();
        }
    }
}

class NotificationService {
    static sendNotification(type: "email" | "whatsapp" | "sms", message: string) {
        const notification = NotificationFactory.createNotification(type);
        notification.send(message);
    }
}

NotificationService.sendNotification("email", "Subscribe kar do please!");
NotificationService.sendNotification("sms", "Subscribe kar do please!");
NotificationService.sendNotification("whatsapp", "Subscribe kar do please!");