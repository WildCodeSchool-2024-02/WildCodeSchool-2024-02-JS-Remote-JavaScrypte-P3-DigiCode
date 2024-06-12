const AbstractRepository = require("./AbstractRepository"); 

class CategoryRepository extends AbstractRepository{
constructor() {
    super({table : "category"});
}

async browse(){
    const [result] = await this.database.query(`select name from ${this.table}`); 

    return result; 
}

async read (id) {
    const [rows] = await this.database.query(`select name from ${this.table} where id = ?`, [id]);

    return rows[0]; 
}

async add (category) {
    const [rows] = await this.database.query(
        `insert into ${this.table} (name) value = ?`, 
        [category.name]
        );

    return rows.insertId;
}


async update(category) {
    const [result] = await this.database.query(`update ${this.table} set name = ? where id = ? `, 
[category.name, category.id])

return result.affectedRows;
}


async destroy (id) {
    const [row] = await this.database.query(
        `delete from ${this.table} where id = ?`,
        [id]
    );
    return row.affectedRows
}
}

module.exports = CategoryRepository