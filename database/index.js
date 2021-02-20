const { Pool } = require('pg');
const { userName, password, db } = require('../db.config.js');

const conString = {
  host: '54.219.212.154',
  port: 5432,
  user: userName,
  database: db,
  password,
};
const client = new Pool(conString);
client.connect((err) => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected to postgres');
  }
});

module.exports = {
  client,
};

// http {
//   upstream app {
//     least_conn;
//     server 3.101.40.70:3002;
//     server 54.241.81.174:3002;
//   }
//   server {
//     listen 80
//     location / {
//       proxy_pass http://app/;
//     }
//   }
// }
// events { }
