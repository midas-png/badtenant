FROM node:lts-gallium as build
WORKDIR /clientapp
COPY package.json .
RUN npm install
COPY . /clientapp
RUN npm run build

# production environment
FROM nginx:alpine
COPY --from=build /clientapp/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]