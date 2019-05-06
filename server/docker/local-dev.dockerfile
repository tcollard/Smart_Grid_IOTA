FROM node:10

WORKDIR /server
VOLUME /server
COPY . .

CMD node api/src/api.js
