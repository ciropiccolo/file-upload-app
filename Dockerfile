FROM node:24

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npx prisma db push --force-reset

CMD ["npm", "run", "dev", "--", "--host"]
