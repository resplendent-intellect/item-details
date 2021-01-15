const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bestbuy', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', () => {
  // there's an error!
});
db.once('open', () => {
  // we're connected!
});

const productSchema = new mongoose.Schema({
  brand: String,
  name: String,
  model: String,
  color: String,
  sku: Number,
  price: Number,
  variations: [{
    variationType: String,
    name: String,
    price: Number,
    image: String,
  }],
  protectionPlans: [{ name: String, price: Number }],
  inStock: String,
  offers: [{ title: String, subtitle: String, body: String }],
  mightAlsoNeed: [{ name: String, price: Number }],
});

const Product = mongoose.model('Product', productSchema);

module.exports = {
  Product,
};
