FROM node:16.14-alpine as build
WORKDIR /client
COPY package.json .
RUN npm install
COPY . /client
RUN npm run build

# FROM nginx:alpine
# COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# CMD ["nginx", "-g", "daemon off;"]