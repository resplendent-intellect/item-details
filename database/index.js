const { Pool } = require('pg');
const { userName, password, db } = require('../db.config.js');

const conString = {
  host: '54.219.212.154',
  port: 5432,
  user: userName,
  database: db,
  password,
};
const client = new Pool(conString);
client.connect((err) => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected to postgres');
  }
});

module.exports = {
  client,
};
