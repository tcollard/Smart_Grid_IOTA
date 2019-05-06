FROM node:10

WORKDIR /server
VOLUME /server
COPY . .
RUN npm install

CMD /bin/bash
