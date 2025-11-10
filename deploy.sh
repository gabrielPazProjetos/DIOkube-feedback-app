#!/bin/bash

echo "Aplicando arquivos do diretório k8s/..."

# Verifica se o diretório existe
if [ ! -d "k8s" ]; then
  echo "Diretório 'k8s/' não encontrado. Certifique-se de estar na raiz do projeto."
  exit 1
fi

# Aplica todos os arquivos YAML
kubectl apply -f k8s/

echo "Deploy concluído."
