FROM mcr.microsoft.com/playwright:v1.43.1-jammy

WORKDIR /tests

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npx", "playwright", "test"]
