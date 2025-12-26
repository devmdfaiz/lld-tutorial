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

// function sendNotification(type: "email" | "whatsapp" | "sms", message: string) {
//     switch(type) {
//         case "email":
//             new EmailNotificationSend().send(message);
//             break;

//         case "sms":
//             new SmsNotificationSend().send(message);

//         case "whatsapp":
//             new WhatsappNotificationSend().send(message);
//             break;

//         default:
//             console.log("Subscribe kar do please!");
//     }
// }

const notificationFactory: Record<"email" | "whatsapp" | "sms", () => Notification> = {
    email: () => new EmailNotificationSend(),
    whatsapp: () => new WhatsappNotificationSend(),
    sms: () => new SmsNotificationSend()
}

function sendNotification(type: "email" | "whatsapp" | "sms", message: string) {
    const notification = notificationFactory[type]();
    notification.send(message);
}

sendNotification("email", "Subscribe kar do please!");
sendNotification("sms", "Subscribe kar do please!");
sendNotification("whatsapp", "Subscribe kar do please!");