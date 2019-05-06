FROM node:10

WORKDIR /front
VOLUME /front
COPY . .
RUN rm -rf node_modules && npm update && npm install

CMD npm run dev
