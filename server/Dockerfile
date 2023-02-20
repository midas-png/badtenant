FROM node:16.14-alpine

WORKDIR /server

COPY package.json /server

RUN npm i

COPY . /server

CMD npm run start

EXPOSE 5000