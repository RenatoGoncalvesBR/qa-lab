import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 20, // usuários virtuais
  duration: '20s', // tempo do teste
  summaryTimeUnit: 'ms', // padronizar saída em milissegundos
};

export default function () {
  const res = http.get('https://jsonplaceholder.typicode.com/posts/999999');

  check(res, {
    'status é 200': (r) => r.status === 200,
    'tempo resposta < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1);
}