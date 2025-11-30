/**
 * This implementation is one of the simplest and inherently thread-safe without needing explicit synchronization.
 */
class Logger {
  private static instance: Logger = new Logger();

  // 1. Private constructor
  private constructor() {
    console.log("Logger instance created");
  }

  // 2. Static method to get the single instance
  static getInstance(): Logger {
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
