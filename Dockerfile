FROM node:18

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY server/. .

RUN npm install && npm cache clean --force

EXPOSE 3000

CMD ["npm", "run", "dev"]

