const AbstractSeeder = require("./AbstractSeeder");

class RoleSeeder extends AbstractSeeder {
  constructor() {
    super({table: "role", truncate: true});
  }

  run() {
    const roles = [
        {
            name: "user",
        },
        {
            name: "admin",
        }
    ]
    roles.forEach((role) => this.insert(role));
  }
}

module.exports = RoleSeeder;