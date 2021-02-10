const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { findOne } = require('../database/queries.js');
require('newrelic');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/products/:id', express.static(`${__dirname}/../client/dist`));
app.use('/bundle', express.static(`${__dirname}/../client/dist/bundle.js`));
app.use(bodyParser.json());

// app.get('/api', (req, res) => {
//   res.redirect('/api/products/1');
// });

app.get('/api/products/:id', (req, res) => {
  const { id } = req.params;
  findOne(id, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      const product = results.rows[0];
      res.status(200).send(product);
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT} !!`);
});

module.exports = {
  app,
  PORT,
};
