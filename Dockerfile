# ---------- STAGE 1: build ----------
    FROM node:20-alpine AS build

    WORKDIR /app
    
    # Копируем зависимости
    COPY package*.json ./
    
    RUN npm config set registry https://registry.npmjs.org/ \
    && npm config set fetch-retries 5 \
    && npm install
    
    # Копируем исходники
    COPY . .
    
    # Собираем React
    RUN npm run build
    
    
    # ---------- STAGE 2: nginx ----------
    FROM nginx:alpine
    
    # Удаляем дефолтную страницу
    RUN rm -rf /usr/share/nginx/html/*
    
    # Копируем результат сборки
    COPY --from=build /app/dist /usr/share/nginx/html
    
    # SPA fallback
    COPY nginx.conf /etc/nginx/conf.d/default.conf
    
    EXPOSE 80
    CMD ["nginx", "-g", "daemon off;"]