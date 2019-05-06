FROM node:10

WORKDIR /front
VOLUME /front
COPY . .
RUN npm install

CMD npm run dev