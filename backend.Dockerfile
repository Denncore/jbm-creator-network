FROM node:lts-alpine AS nest-jbm
WORKDIR /usr/src/app
COPY package.json ./
RUN yarn install --ignore-scripts
COPY . .
RUN yarn run build-backend

FROM node:16-alpine as production
WORKDIR /app
COPY package.json ./
RUN yarn install --ignore-scripts
COPY --from=nest-jbm /usr/src/app/dist/apps/nest-jbm ./dist/
EXPOSE 3333
CMD [ "node", "dist/main.js" ]
