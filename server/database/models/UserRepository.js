/* eslint-disable camelcase */
const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
  }

  // Browse
  async readAll() {
    const [rows] = await this.database.query(
      `SELECT u.firstname, u.lastname, u.email, u.password, u.birthdate, r.name AS role_name, r.access AS role_access FROM ${this.table} AS u JOIN role AS r ON u.role_id=r.id`
    );

    return rows;
  }

  // Read
  async readById(id) {
    const [row] = await this.database.query(
      `SELECT u.firstname, u.lastname, u.email, u.password, u.birthdate, r.name AS role_name, r.access AS role_access FROM ${this.table} AS u JOIN role AS r ON u.role_id=r.id WHERE u.id=?`,
      [id]
    );

    return row[0];
  }

  // Edit
  async update(user) {
    const { firstname, lastname, email, password, birthdate, role_id, id } =
      user;

    const [result] = await this.database.query(
      `UPDATE ${this.table} SET firstname=?, lastname=?, email=?, password=?, birthdate=?, role_id=? WHERE id=?`,
      [firstname, lastname, email, password, birthdate, role_id, id]
    );

    return result;
  }

  // Add
  async create(user) {
    const { firstname, lastname, email, password, birthdate, role_id } = user;

    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname, email, password, birthdate, role_id) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [firstname, lastname, email, password, birthdate, role_id]
    );

    return result.insertId;
  }

  // Destroy or "Delete"
  async destroy(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id=?`,
      [id]
    );

    return result;
  }
}

module.exports = UserRepository;
