const express = require('express');

const { findOne } = require('../database/helpers');

const app = express();

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
