
import http from 'k6/http';
import { check, sleep } from 'k6';

const BASE_URL = 'https://learnqa.dev/en/qa-shop/';

export const options = {
  vus: 5,
  duration: '20s',
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<2000'],
  },
};

export default function () {
  const response = http.get(BASE_URL);

  check(response, {
    'QA Shop website returns HTTP 200': (r) => r.status === 200,
    'response is below 2 seconds': (r) => r.timings.duration < 2000,
  });

  sleep(1);
}
