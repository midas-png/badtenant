FROM node:16.14-alpine

WORKDIR /clientapp

COPY . .

RUN npm install

COPY . /clientapp

RUN npm run start

EXPOSE 3000