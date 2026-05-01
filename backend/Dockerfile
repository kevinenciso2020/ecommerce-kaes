FROM node:20-slim
RUN apt-get update -y && apt-get install -y openssl

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY prisma ./prisma/
RUN npx prisma generate

COPY src ./src/

EXPOSE 8000

ENV NODE_ENV=production

CMD ["npm", "run", "start:prod"]