FROM node:lts-gallium as build
WORKDIR /client
COPY package.json .
RUN npm install
COPY . /client
RUN npm run build

# production environment
FROM nginx:alpine
COPY --from=build /client/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]