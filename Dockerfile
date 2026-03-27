FROM mcr.microsoft.com/playwright:v1.58.2-jammy

# Update system dependencies to patch vulnerabilities
RUN apt-get update && apt-get upgrade -y && apt-get clean && rm -rf /var/lib/apt/lists/*

# Install K6
RUN curl https://github.com/grafana/k6/releases/download/v0.51.0/k6-v0.51.0-linux-amd64.tar.gz -L -o k6.tar.gz && \
    tar xvf k6.tar.gz && \
    mv k6-v0.51.0-linux-amd64/k6 /usr/local/bin/ && \
    rm k6.tar.gz k6-v0.51.0-linux-amd64 -rf

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV DOCKER_BUILD=true

# Run complete QA suite: API + E2E + Performance tests
CMD ["npm", "run", "test:qa"]