FROM node:12-alpine

RUN mkdir -p /opt/gateway
WORKDIR /opt/gateway

ENV PORT 4001

COPY tsconfig.json .
COPY package.json .
COPY yarn.lock .
COPY index.ts .
COPY src src

RUN yarn install

CMD yarn start