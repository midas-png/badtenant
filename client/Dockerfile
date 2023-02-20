FROM node:16.14-alpine

WORKDIR /clientapp

COPY package.json /clientapp

RUN npm i

COPY . /clientapp

RUN npm run start

EXPOSE 3000