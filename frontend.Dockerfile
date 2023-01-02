FROM node:lts-alpine AS ng-jbm
WORKDIR /usr/src/app
COPY package.json ./
RUN yarn install --ignore-scripts
COPY . .
RUN yarn run build-frontend

FROM nginx:1.17.1-alpine
COPY nginx-frontend.conf /etc/nginx/nginx.conf
COPY --from=ng-jbm /usr/src/app/dist/apps/ng-jbm /usr/share/nginx/html
