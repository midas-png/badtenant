FROM node:16-alpine 

WORKDIR /app

COPY . .

ENV REACT_APP_API_URL=http://localhost:5000/

RUN npm i 

RUN npm run start

ENV NODE_ENV production

EXPOSE 3000

CMD [ "npx", "serve", "build" ]