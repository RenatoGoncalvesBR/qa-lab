FROM mcr.microsoft.com/playwright:v1.58.2-jammy

# Update system dependencies to patch vulnerabilities
RUN apt-get update && apt-get upgrade -y && apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV DOCKER_BUILD=true

CMD ["npx", "playwright", "test"]