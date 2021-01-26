const { app } = require('./index');

const server = app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${3000}`);
});

module.exports = server;
