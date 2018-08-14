# build stage
FROM node:10.8.0-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# production stage
FROM nginx:1.15.2-alpine as production-stage
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.crt /etc/ssl
COPY nginx.key /etc/ssl
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
