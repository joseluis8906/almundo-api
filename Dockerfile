FROM node:10.15.3-stretch

WORKDIR /app
COPY . /app

RUN npm install -g typescript
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "serve"]