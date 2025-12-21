interface Notification {
    send(message: string): void;
}

class EmailNotification implements Notification {
    send(message: string): void {
        console.log(`Sending Email Notification: ${message}`)
    }
}

class SmsNotification implements Notification {
    send(message: string): void {
        console.log(`Sending SMS Notification: ${message}`)
    }
}


class WhatsappNotification implements Notification {
    send(message: string): void {
        console.log(`Sending Whatsapp Notification: ${message}`)
    }
}

abstract class NotificationCreator {
    abstract createNotification(): Notification;

    sendNotification(message: string) {
        const notification = this.createNotification();
        notification.send(message);
    }
}

class EmailNotificationCreator extends NotificationCreator {
    createNotification(): Notification {
        return new EmailNotification();
    }
}

class SmsNotificationCreator extends NotificationCreator {
    createNotification(): Notification {
        return new SmsNotification();
    }
}

class WhatsappNotificationCreator extends NotificationCreator {
    createNotification(): Notification {
        return new WhatsappNotification();
    }
}

// function sendNotification(type: "email" | "whatsapp" | "sms", message: string) {
//     switch(type) {
//         case "email":
//             new EmailNotificationCreator().sendNotification(message);
//             break;

//         case "sms":
//             new SmsNotificationCreator().sendNotification(message);

//         case "whatsapp":
//             new WhatsappNotificationCreator().sendNotification(message);
//             break;

//         default:
//             console.log("Subscribe kar do please!")
//     }
// }

const notificationFactory: Record<"email" | "whatsapp" | "sms", () => NotificationCreator> = {
    email: () => new EmailNotificationCreator(),
    sms: () => new SmsNotificationCreator(),
    whatsapp: () => new WhatsappNotificationCreator()
}

function sendNotification(type: "email" | "whatsapp" | "sms", message: string) {
    const notification = notificationFactory[type]();
    notification.sendNotification(message);
}

sendNotification("email", "Subscribe kar do please!");
sendNotification("sms", "Subscribe kar do please!");
sendNotification("whatsapp", "Subscribe kar do please!");