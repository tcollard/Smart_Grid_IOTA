FROM node:10

WORKDIR /front
VOLUME /front
RUN apt-get update && apt-get install -y inotify-tools && npm install

CMD npm run dev