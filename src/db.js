let dbString = 'sqlite://db.sqlite';

if (process.env['NODE_ENV']) {
  dbString = 'sqlite://db-test.sqlite';
}

const Sequelize = require('sequelize');
const db = new Sequelize(dbString, {
  logging: false
});

module.exports = db;