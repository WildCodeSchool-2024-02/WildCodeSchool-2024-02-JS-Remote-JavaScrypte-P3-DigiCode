const AbstractSeeder = require("./AbstractSeeder");

class VideoSeeder extends AbstractSeeder {
  constructor() {
    // call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "video", truncate: true });
  }

  // populate the "video" table with fake data
  run() {
    // generate and insert fake data into the "video" table
    for (let i = 0; i < 10; i += 1) {
      // generate fake video data
      const fakeVideo = {
        title: this.faker.lorem.words(), // generates a fake name (title)
        url: this.faker.internet.url(), // generates a fake url
        image: this.faker.image.urlLoremFlickr(), // generates a fake image
        description: this.faker.lorem.paragraph(), // generates a fake description
        date: this.faker.date.recent(), // generate a fake date
        category_id: this.faker.number.int({ min: 1, max: 5 }),
      };

      // insert the fakeVideo data into the "video" table
      this.insert(fakeVideo);
    }
  }
}

module.exports = VideoSeeder;
