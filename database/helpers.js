const { Product } = require('./index');

const findOne = (id, callback) => {
  Product.findById(id, (err, results) => {
    if (err) {
      callback(err);
    }
    callback(null, results);
  });
};

module.exports = {
  findOne,
};
