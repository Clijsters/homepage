FROM node:14.15.4-stretch
COPY src/package*.json ./
RUN npm ci
COPY src/ ./
RUN npm run build

EXPOSE 3000
ENTRYPOINT ["npm", "run", "start"]
