# Étape 1 : build avec node
FROM node:18 AS build
WORKDIR /app
ENV NODE_OPTIONS=--openssl-legacy-provider
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Étape 2 : servir avec nginx
FROM nginx:alpine
COPY --from=build /app/dist/LBtimesheet /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
