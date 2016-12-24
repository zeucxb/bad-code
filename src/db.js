const Sequelize = require('sequelize');

let dbString = '';

switch (process.env.NODE_ENV) {
  case 'test':
    dbString = 'sqlite://db-test.sqlite';
    break;
  case 'production':
    dbString = process.env.DATABASE_URL || '';
    break;
  default:
    dbString = 'sqlite://db.sqlite';
}

const db = new Sequelize(dbString, {
  logging: false
});

module.exports = db;