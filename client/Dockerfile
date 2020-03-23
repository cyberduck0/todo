FROM node:13.10.1

ADD yarn.lock /yarn.lock
ADD package.json /package.json

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
RUN yarn

WORKDIR /src
ADD . /src

EXPOSE 3000

ENTRYPOINT ["/bin/bash", "/src/run.sh"]
CMD ["start"]