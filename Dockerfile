FROM nginx:alpine

# Удаляем дефолтную страницу
RUN rm -rf /usr/share/nginx/html/*

# Копируем билд React в html
COPY dist/ /usr/share/nginx/html/

# Копируем кастомный конфиг Nginx для SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Экспонируем порт 80
EXPOSE 80

# Запускаем Nginx в фоне
CMD ["nginx", "-g", "daemon off;"]
