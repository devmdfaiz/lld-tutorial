// Dependency Inversion Principle

// Bad example
// class UserService {
//   private db = new MongoDB(); // tightly coupled

//   getUser(id: string) {
//     return this.db.find(id);
//   }
// }

interface Database {
  find(id: string): any;
}

class MongoDB implements Database {
  find(id: string) { /* ... */ }
}

class PostgresDB implements Database {
  find(id: string) { /* ... */ }
}

class UserService {
  constructor(private db: Database) {}

  getUser(id: string) {
    return this.db.find(id);
  }
}
