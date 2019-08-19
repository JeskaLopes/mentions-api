FROM node:10-alpine
MAINTAINER jeskalopes
RUN apk add git
RUN git clone https://github.com/JeskaLopes/mentions-api.git
RUN ls
RUN cd mentions-api && npm install
EXPOSE 3000
RUN pwd
WORKDIR /mentions-api/src
CMD [ "node", "app.js" ]
RUN echo "funcionou"