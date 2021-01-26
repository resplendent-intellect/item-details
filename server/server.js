const { app } = require('./index');

const server = app.listen(3002, () => {
  console.log(`Example app listening at http://localhost:${3002}`);
});

module.exports = server;
