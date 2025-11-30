/**
 * This implementation uses a static inner helper class to hold the singleton instance. The inner class is not loaded into memory until it's referenced for the first time in the getInstance() method.

It is thread-safe without requiring explicit synchronization.
 */
class Logger {
  // 1. Private constructor
  private constructor() {
    console.log("Logger instance created");
  }

  private static LoggerHelper = class {
    public static readonly INSTANCE: Logger = new Logger();
  };

  // 2. Static method to get the single instance
  static getInstance(): Logger {
    return this.LoggerHelper.INSTANCE;
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
