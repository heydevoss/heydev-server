FROM node:latest

WORKDIR /server

COPY . .

ENV PORT 5000

RUN npm install

EXPOSE $PORT

ENTRYPOINT ["npm", "start"]

