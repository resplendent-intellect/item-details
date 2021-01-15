const express = require('express');

const { findOne } = require('../database/helpers');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  findOne(id, (results) => {
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});