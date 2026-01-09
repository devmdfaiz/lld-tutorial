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

class VideoUploadFacade {
  constructor(
    private encoder: Encoder,
    private thumbnailService: ThumbnailService,
    private repository: VideoRepository,
    private notifier: NotificationService
  ) {}

  uploadVideo(file: string): void {
    this.encoder.encode(file);
    this.thumbnailService.generate(file);
    this.repository.save(file);
    this.notifier.notify(file);

    console.log("Video upload completed ✅");
  }
}

// Client code
const video = "demo.mp4";

const videoFacade = new VideoUploadFacade(
  new VideoEncoder(),
  new ThumbnailGenerator(),
  new VideoDB(),
  new PushNotification()
);

videoFacade.uploadVideo(video);