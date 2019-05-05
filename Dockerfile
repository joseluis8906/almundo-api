FROM node:10.15.3-stretch

WORKDIR /app
COPY . /app

RUN npm install
RUN npm run build
CMD ["npm", "run", "serve"]