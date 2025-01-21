FROM node:alpine

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 7500

CMD ["npm", "run", "prod"]