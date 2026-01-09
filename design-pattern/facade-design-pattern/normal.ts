// Interfaces

interface Encoder {
  encode(file: string): void;
}

interface ThumbnailService {
  generate(file: string): void;
}

interface VideoRepository {
  save(file: string): void;
}

interface NotificationService {
  notify(file: string): void;
}

// Classes
class VideoEncoder implements Encoder {
  encode(file: string): void {
    console.log(`Encoding video: ${file}`);
  }
}

class ThumbnailGenerator implements ThumbnailService {
  generate(file: string): void {
    console.log(`Generating thumbnail for: ${file}`);
  }
}

class VideoDB implements VideoRepository {
  save(file: string): void {
    console.log(`Saving metadata for: ${file}`);
  }
}

class PushNotification implements NotificationService {
  notify(file: string): void {
    console.log(`Sending notification for: ${file}`);
  }
}



// Client code
const encoder = new VideoEncoder();
const thumbnail = new ThumbnailGenerator();
const videoDb= new VideoDB();
const notifier = new PushNotification();

const video = "demo.mp4";

encoder.encode(video);
thumbnail.generate(video);
videoDb.save(video);
notifier.notify(video);
