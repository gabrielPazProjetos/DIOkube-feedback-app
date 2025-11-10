# frontend/Dockerfile
FROM nginx:alpine

# Remove a configuração padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia os arquivos do frontend para o diretório público
COPY . /usr/share/nginx/html

# Cria uma configuração personalizada para servir os arquivos
COPY nginx.conf /etc/nginx/conf.d/

EXPOSE 80
