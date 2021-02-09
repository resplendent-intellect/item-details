const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bestbuy2', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', () => {
  // there's an error!
});
db.once('open', () => {
  // we're connected!
});

const productSchema = new mongoose.Schema({
  _id: Number,
  brand: String,
  name: String,
  model: String,
  color: String,
  sku: Number,
  price: Number,
  variations: [{
    _id: Number,
    variationType: String,
    variationItems: [{
      _id: Number,
      name: String,
      price: Number,
      image: String,
    }],
  }],
  protectionPlans: [{ name: String, price: Number }],
  inStock: String,
  offers: [{
    offerType: String,
    offers: [
      { title: String },
    ],
  }],
  mightAlsoNeed: [{ name: String, price: Number }],
});

const Product = mongoose.model('Product', productSchema);

module.exports = {
  Product,
};
