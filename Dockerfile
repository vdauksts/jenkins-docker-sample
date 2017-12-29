FROM node:9-alpine

COPY index.js package.json /

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
