// Single Responsibility Principle

// Bad example
// class UserService {
//   async createUser(data) {
//     // validation
//     if (!data.email.includes("@")) throw new Error("Invalid email");

//     // save to DB
//     await db.users.insert(data);

//     // send email
//     await mailer.sendWelcomeEmail(data.email);
//   }
// }


class UserValidator {
  validate(data) {
    if (!data.email.includes("@")) throw new Error("Invalid email");
  }
}

class UserRepository {
  async save(data) {
    return db.users.insert(data);
  }
}

class UserEmailService {
  async sendWelcome(email) {
    await mailer.sendWelcomeEmail(email);
  }
}

class UserService {
  constructor(private validator: UserValidator, private repo: UserRepository, private mailer: UserEmailService) {}

  async createUser(data) {
    this.validator.validate(data);
    await this.repo.save(data);
    await this.mailer.sendWelcome(data.email);
  }
}
