import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 100, // usuários virtuais
  duration: '60s', // tempo do teste
  summaryTimeUnit: 'ms', // padronizar saída em milissegundos
};

export default function () {
  const res = http.get('https://jsonplaceholder.typicode.com/posts');

  check(res, {
    'status é 200': (r) => r.status === 200,
    'tempo resposta < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1);
}