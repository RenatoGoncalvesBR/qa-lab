# 🐳 Rodando QA Lab no Docker

## Quick Start

### Opção 1: Docker Compose (Recomendado)
```bash
docker-compose up
```

Isso vai:
1. ✅ Construir a imagem Docker
2. ✅ Rodar testes de API
3. ✅ Rodar testes E2E
4. ✅ Rodar testes de Performance (K6)
5. ✅ Salvar relatórios em `./playwright-report/`

### Opção 2: Docker direto
```bash
docker build -t qa-lab .
docker run --rm -v $(pwd)/playwright-report:/app/playwright-report -v $(pwd)/test-results:/app/test-results qa-lab
```

---

## 📊 Acessar Relatórios

Após os testes rodarem, os relatórios ficarão em:
- **Playwright Report:** `./playwright-report/index.html`
- **Test Results:** `./test-results/`

Para visualizar o relatório Playwright:
```bash
npx playwright show-report
```

---

## 🚀 O que Roda

O Docker executa `npm run test:qa` que inclui:

1. **API Tests** (`npm run test:api`)
   - Testes de endpoints da API
   - Validações de resposta

2. **E2E Tests** (`npm run test:e2e`)
   - Testes de interface
   - Fluxos do usuário

3. **Performance Tests** (`npm run test:perf`)
   - Teste de carga com K6
   - 100 usuários virtuais por 60s

---

## 🔧 Customizações

### Rodar apenas um tipo de teste:

```bash
# Apenas testes de API
docker run --rm qa-lab npm run test:api

# Apenas testes E2E
docker run --rm qa-lab npm run test:e2e

# Apenas testes de Performance
docker run --rm qa-lab npm run test:perf
```

### Aumentar recursos:
```bash
docker-compose up --build
```

### Ver logs em tempo real:
```bash
docker-compose up --no-detach
```

---

## 📋 Estrutura

```
├── Dockerfile                 # Imagem Docker com Playwright + K6
├── docker-compose.yml         # Orquestração Docker
├── package.json              # Scripts npm (test:api, test:e2e, test:perf)
├── tests/
│   ├── api/                  # Testes de API
│   ├── aprendizado/          # Testes E2E
│   └── example.spec.ts       # Exemplo de teste
├── loadtest.js               # Teste de performance K6
├── playwright.config.ts      # Configuração Playwright
└── playwright-report/        # Relatórios (gerados)
```

---

## ✅ Checklist

- [x] Dockerfile roda `npm run test:qa`
- [x] Docker Compose com volumes
- [x] Relatórios salvos localmente
- [x] K6 integrado
- [x] 100% isolado
