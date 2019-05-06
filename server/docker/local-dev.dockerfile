FROM node:10

WORKDIR /server
VOLUME /server
COPY . .
RUN rm -rf node_modules && npm update

CMD node api/src/api.js
