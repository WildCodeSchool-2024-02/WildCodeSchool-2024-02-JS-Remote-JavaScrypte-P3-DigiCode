/* eslint-disable camelcase */
const AbstractRepository = require("./AbstractRepository");

class VideoRepository extends AbstractRepository {
  constructor() {
    super({ table: "video" });
  }

  // Browse (read all) videos

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT id, title, url, image, description, date, is_premium, is_free  FROM ${this.table}`
    );

    // return the array of videos
    return rows;
  }

  // Read

  async read(id) {
    // execute the SQL SELECT query to retrieve a specific video by its id
    const [row] = await this.database.query(
      `SELECT id, title, url, image, description, date, is_premium, is_free FROM ${this.table} where id = ?`,
      [id]
    );

    // return the first row of the result, aka the video
    return row[0];
  }

  // Edit

  async edit(video) {
    const { is_premium, is_free, category_id } = video;

    const [result] = await this.database.query(
      `UPDATE ${this.table} SET is_premium=?, is_free=?, category_id=? WHERE id=?`,
      [is_premium, is_free, category_id]
    );

    return result.affectedRows;
  }

  // Add (create)

  async add(video) {
    const {
      title,
      url,
      image,
      description,
      date,
      is_premium,
      is_free,
      category_id,
    } = video;
    // execute the SQL INSERT query to add a new video to the "video" table
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (title, url, image, description, date, is_premium, is_free, category_id) values(?, ?, ?, ?, ?, ?, ?, ?)`,
      [title, url, image, description, date, is_premium, is_free, category_id]
    );

    // return the id of the newly inserted video
    return result.insertId;
  }

  // Destroy (delete)
  async destroy(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id=?`,
      [id]
    );

    return result.affectedRows;
  }
}

module.exports = VideoRepository;
