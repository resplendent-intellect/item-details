const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { findOne, findRandom } = require('../database/helpers');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/products/:id', express.static(`${__dirname}/../client/dist`));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/products/:id', (req, res) => {
  const { id } = req.params;
  findOne(id, (err, results) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).send(results);
  });
});

// app.get('/random', (req, res) => {
//   findRandom((err, data) => {
//     if (err) {
//       res.status(404).send(err);
//     }
//     res.status(200).send(data);
//   });
// });

module.exports = {
  app,
};
