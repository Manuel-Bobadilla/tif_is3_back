FROM node:16.17.0-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm ci --only=production
EXPOSE 3000
CMD ["npm","start"]
