# Étape 1 : Build de l'application Angular
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --prod

# Étape 2 : Serveur Nginx
FROM nginx:alpine

# Copier les fichiers buildés Angular vers le dossier Nginx
COPY --from=build /app/dist/LBtimesheet /usr/share/nginx/html

# Copier la config personnalisée Nginx dans conf.d
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
