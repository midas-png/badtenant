FROM node:16.14-alpine

WORKDIR /serverapp

COPY package.json /serverapp

RUN npm i

COPY . /serverapp

CMD npm run start

EXPOSE 5000