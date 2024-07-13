FROM node:18

WORKDIR /home/src/app

COPY server/. .

RUN npm install

EXPOSE 3000

CMD ["node", "server.js"]

