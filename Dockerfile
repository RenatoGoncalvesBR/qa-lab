FROM mcr.microsoft.com/playwright:v1.58.2-jammy

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV DOCKER_BUILD=true

CMD ["npx", "playwright", "test"]