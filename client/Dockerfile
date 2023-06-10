FROM node:lts-gallium as build
WORKDIR /clientapp
COPY . .
RUN npm install
COPY . /clientapp
RUN npm run build

# production environment
FROM nginx:alpine
COPY /clientapp/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]