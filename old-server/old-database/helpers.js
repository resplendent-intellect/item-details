const { Product } = require('./index');

const findOne = (id, callback) => {
  Product.findById(id, (err, results) => {
    if (err) {
      callback(err);
    }
    callback(null, results);
  });
};

const findRandom = (callback) => {
  const random = Math.floor(Math.random() * 100);
  Product
    .find()
    .skip(random)
    .limit(1)
    .exec((err, result) => {
      callback(err, result);
    });
};

module.exports = {
  findOne,
  findRandom,
};
