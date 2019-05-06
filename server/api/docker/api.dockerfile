FROM node:10

WORKDIR /server
VOLUME /server
RUN npm install
CMD ["npm", "start"]
