FROM node:lts-alpine

ENV HOST=0.0.0.0

RUN npm install -g http-server

WORKDIR /app

COPY /package*.json ./

RUN npm install

COPY ./ /app

EXPOSE 5173

CMD ["npm", "run", "dev"]