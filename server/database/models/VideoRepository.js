/* eslint-disable camelcase */
const AbstractRepository = require("./AbstractRepository");

class VideoRepository extends AbstractRepository {
  constructor() {
    super({ table: "video" });
  }

  // Browse (read all) videos

  async readAll(video) {
    const {
      name,
      url,
      image,
      description,
      date,
      is_premium,
      is_free,
      requires_account,
      category_id,
    } = video;
    const [rows] = await this.database.query(
      `SELECT name, url, image, description, date, is_premium, is_free, requires_account FROM ${this.table}`,
      [
        name,
        url,
        image,
        description,
        date,
        is_premium,
        is_free,
        requires_account,
        category_id,
      ]
    );

    // return the array of videos
    return rows;
  }

  // Read

  async read(id) {
    // execute the SQL SELECT query to retrieve a specific video by its id
    const [row] = await this.database.query(
      `SELECT name, url, image, description, date, is_premium, is_free, requires_account FROM ${this.table} where id = ?`,
      [id]
    );

    // return the first row of the result, aka the video
    return row[0];
  }

  // Edit

  async edit(video) {
    const { is_premium, is_free, requires_account, category_id } = video;

    const [result] = await this.database.query(
      `UPDATE ${this.table} SET is_premium=?, is_free=?, requires_account=?, category_id=?`,
      [is_premium, is_free, requires_account, category_id]
    );

    return result;
  }

  // Add (create)

  async add(video) {
    const {
      name,
      url,
      image,
      description,
      date,
      is_premium,
      is_free,
      requires_account,
      category_id,
    } = video;
    // execute the SQL INSERT query to add a new video to the "video" table
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, url, image, description, date, is_premium, is_free, requires_account, category_id) values(?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        name,
        url,
        image,
        description,
        date,
        is_premium,
        is_free,
        requires_account,
        category_id,
      ]
    );

    // return the id of the newly inserted video
    return result.insertId;
  }

  // Destroy (delete)
  async destroy(video) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id=?`,
      [video]
    );

    return result;
  }
}

module.exports = VideoRepository;
