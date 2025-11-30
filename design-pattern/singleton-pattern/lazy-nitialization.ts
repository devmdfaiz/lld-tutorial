/**
 * This approach creates the singleton instance only when it is needed, saving resources if the singleton is never used in the application.
 */
class Logger {
  private static instance: Logger | null = null;

  // 1. Private constructor
  private constructor() {
    console.log("Logger instance created");
  }

  // 2. Static method to get the single instance
  static getInstance(): Logger {
    if (Logger.instance === null) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  // 3. Normal methods
  log(message: string) {
    console.log(`[LOG]: ${message}`);
  }
}

// Usage
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log("App started");
logger2.log("User logged in");

console.log("Same instance?", logger1 === logger2); // true

// Output:
// Logger instance created
// [LOG]: App started
// [LOG]: User logged in
// Same instance? true
