# ETAP 1: Budowanie (Builder)
FROM node:20-slim AS builder
WORKDIR /app

# Kopiowanie zależności
COPY package*.json ./
RUN npm ci

# Kopiowanie kodu i budowanie
COPY . .
RUN npm run build

# ETAP 2: Serwowanie (Nginx)
FROM nginx:alpine

# Kopiujemy zbudowaną aplikację
COPY --from=builder /app/dist /usr/share/nginx/html

# --- POPRAWKA: Kopiujemy Twój plik konfiguracyjny ---
# To sprawi, że Nginx będzie słuchał na porcie 8080
COPY nginx.conf /etc/nginx/conf.d/default.conf
# ----------------------------------------------------

# Informacja dla Dockera
EXPOSE 8080

# Start serwera
CMD ["nginx", "-g", "daemon off;"]