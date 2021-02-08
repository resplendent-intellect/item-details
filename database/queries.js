const { client } = require('./index.js');

const findOne = (id, callback) => {
  const queryString = `SELECT * FROM products WHERE _id = ${id}`;
  client.query(queryString, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  findOne,
};

// EXPLAIN ANALYZE *insert query here*
