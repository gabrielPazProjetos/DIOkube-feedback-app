# backend/Dockerfile
FROM php:7.4-apache

# Copia os arquivos PHP para o diretório padrão do Apache
COPY . /var/www/html/

# Instala a extensão mysqli para conectar ao MySQL
RUN docker-php-ext-install mysqli

EXPOSE 80
