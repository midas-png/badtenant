FROM node:16.14-alpine
WORKDIR /clientapp
COPY package.json /clientapp
RUN npm i
COPY . /clientapp
CMD npm run start

FROM nginx:alpine
COPY --from=build /web/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]