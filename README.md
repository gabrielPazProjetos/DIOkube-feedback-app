--- kube-feedback-app
Aplicação de coleta de feedback desenvolvida como parte do desafio da formação Kubernetes da DIO.  
O projeto foi construído com foco em boas práticas de infraestrutura como código, conteinerização e orquestração com Kubernetes.

--- Tecnologias Utilizadas
- Frontend: HTML, CSS, JavaScript, Nginx  
- Backend: PHP com conexão MySQL  
- Banco de Dados: MySQL 

--- Infraestrutura
- Docker (com Dockerfile para backend e frontend)  
- Kubernetes (com Deployment, Service, PersistentVolume, Secrets)

---  Como Executar Localmente com Docker

--- Backend
- bash
docker build -t kube-feedback-backend ./backend
docker run -d -p 8080:80 kube-feedback-backend
---Frontend
-bash
docker build -t kube-feedback-frontend ./frontend
docker run -d -p 8081:80 kube-feedback-frontend

--- Como Aplicar com Kubernetes
- bash
kubectl apply -f k8s/
--- Ou use o script:
- bash
./deploy.sh

--- Nota de Segurança
Este projeto é didático e não expõe nenhum cluster público.
Por razões de segurança e responsabilidade, recursos sensíveis como Secrets ou ConfigMaps não são publicados, embora o projeto esteja preparado para suportá-los.

--- Observações
O backend utiliza variáveis de ambiente para conexão com o banco, conforme boas práticas.
O banco de dados possui volume persistente configurado via PersistentVolumeClaim.
O frontend se comunica com o backend via serviço interno do cluster (backend-service).
