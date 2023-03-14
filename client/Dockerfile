FROM node:16.14-alpine

WORKDIR /clientapp
COPY package.json .
RUN npm install
COPY . /clientapp
RUN npm run build

FROM nginx:alpine
COPY --from=build /clientapp/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]