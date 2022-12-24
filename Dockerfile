FROM node:lts-alpine as nest-jbm
WORKDIR /app
COPY /app/dist/apps/nest-jbm .
ENV PORT=3333
COPY package.json .
COPY yarn.lock .
CMD node ./main.js

FROM node:lts-alpine as ng-jbm
WORKDIR /app
COPY /app/dist/apps/ng-jbm .
ENV PORT=4200
EXPOSE ${PORT}
CMD node ./main.js