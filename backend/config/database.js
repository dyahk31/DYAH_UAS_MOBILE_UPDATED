import { Sequelize } from "sequelize";

const db = new Sequelize('laundry_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;
