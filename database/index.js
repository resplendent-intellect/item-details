const { Pool } = require('pg');
const { userName, password } = require('../db.config.js');

const conString = {
  host: 'localhost',
  port: 5432,
  user: userName,
  database: 'sdc_hayley',
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
