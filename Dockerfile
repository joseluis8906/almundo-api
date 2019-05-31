FROM node:10.15.3-stretch as builder

WORKDIR /app
COPY . /app

RUN npm install -g typescript
RUN npm install
RUN npm run build

FROM node:10.15.3-alpine
WORKDIR /app
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/dist /app/dist
EXPOSE 3000
CMD ["npm", "run", "serve"]