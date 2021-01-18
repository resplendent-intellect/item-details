const { Product } = require('./index');

const findOne = (id, callback) => {
  Product.findById(id, (err, results) => {
    if (err) {
      throw err;
    }
    callback(results);
  });
};

module.exports = {
  findOne,
};
