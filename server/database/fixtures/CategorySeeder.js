const AbstractSeeder = require("./AbstractSeeder");

class CategorySeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "category", truncate: true });
  }

  // The run method - Populate the 'category' table with fake data

  run() {
    const categories = [{ name: "sport" }, { name: "video games" }, { name: "nature" },{ name: "animals" },{ name: "art and crafts" }];

categories.forEach((category) => this.insert(category));
  
  }
}

// Export the CategorySeeder class
module.exports = CategorySeeder;