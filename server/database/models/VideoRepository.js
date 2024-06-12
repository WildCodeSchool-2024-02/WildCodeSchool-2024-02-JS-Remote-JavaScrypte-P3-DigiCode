const AbstractRepository = require("./AbstractRepository");

class VideoRepository extends AbstractRepository {
  constructor() {
    super({ table: "video" });
  }

  // Browse (read all) videos from specific category????

  async readAll() {
    // execute the SQL SELECT query to retrieve all videos from a specific category?
    const [rows] = await this.database.query();

    // return the arry of videos
    return rows;
  }

  // Read

  async read(id) {
    // execute the SQL SELECT query to retrieve a specific video by its id
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // return the first row of the result, aka the video
    return rows[0];
  }

  // Add (create)

  async add(video) {
    // execute the SQL INSERT query to add a new video to the "video" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name, ) values(?)`,
      [video.name]
    );

    // return the id of the newly inserted video
    return result.insertId;
  }
}

module.exports = VideoRepository;
