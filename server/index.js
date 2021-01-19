const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const { findOne } = require('../database/helpers');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/../client/dist'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  findOne(id, (results) => {
    res.status(200).send(results);
  });
});

module.exports = {
  app,
};
