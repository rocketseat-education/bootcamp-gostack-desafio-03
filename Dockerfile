FROM node:alpine

WORKDIR /usr/app

COPY . ./
RUN yarn
