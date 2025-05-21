# Étape 1 : Build Angular avec Node 18
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Ajout de la variable d'environnement pour OpenSSL legacy
ENV NODE_OPTIONS=--openssl-legacy-provider

RUN npm run build --prod

# Étape 2 : Serveur nginx
FROM nginx:alpine

COPY --from=build /app/dist/LBtimesheet /usr/share/nginx/html

# Copie le fichier nginx.conf seulement si tu as corrigé son contenu (sans erreur de config)
# Sinon, supprime ou commente cette ligne pour utiliser la config nginx par défaut
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
