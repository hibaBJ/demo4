#FROM node:18-alpine
#WORKDIR /
#COPY . .
#RUN npm install 
#CMD npm run start
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

RUN npm run build

FROM nginx:alpine

WORKDIR /app

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]