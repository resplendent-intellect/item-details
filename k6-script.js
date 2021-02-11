import { sleep } from 'k6';
import http from 'k6/http';

export const options = {
  stages: [
    { target: 10, duration: '2m' },
    { target: 10, duration: '5m' },
    { target: 100, duration: '2m' },
    { target: 100, duration: '5m' },
    { target: 500, duration: '2m' },
    { target: 500, duration: '5m' },
    { target: 1000, duration: '2m' },
    { target: 1000, duration: '5m' },
  ],
  ext: {
    loadimpact: {
      distribution: {
        'amazon:us:ashburn': { loadZone: 'amazon:us:ashburn', percent: 100 },
      },
    },
  },
};

export default function main() {
  let response;

  // first 10% of db
  let rand = Math.floor(Math.random() * 10000000 + 1);
  response = http.get(`http://localhost:3000/products/${rand}`);

  // Automatically added sleep
  sleep(1);
}
