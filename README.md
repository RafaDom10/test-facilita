# Projeto React com API Node - Guia de Execução Local

Este repositório contém um projeto React front-end integrado com uma API Node.js back-end. Siga as instruções abaixo para configurar e executar o projeto localmente.

## Pré-requisitos

Certifique-se de ter os seguintes componentes instalados em seu sistema:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) ou [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)

## Configuração do Banco de Dados PostgreSQL

Antes de iniciar o projeto, é necessário configurar um banco de dados PostgreSQL. Utilizaremos o Docker para simplificar o processo. Execute os seguintes comandos no terminal:

```bash
docker run --name postgres -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -d postgres
```

Isso iniciará um contêiner Docker com um banco de dados PostgreSQL na porta 5432, usando o usuário "root" e senha "root".

## Instalação de Dependências

Para instalar as dependências do projeto, navegue até as pastas do front-end e do back-end e execute o seguinte comando:

```bash
cd front-end/
yarn install # ou npm install
```
```bash
cd backend/
yarn install # ou npm install
```
## Configuração do Banco de Dados
Execute o arquivo DDL (Data Definition Language) fornecido para criar o banco de dados necessário.


O front-end estará disponível em http://localhost:5173 e o back-end em http://localhost:3000.

Agora você deve ter o projeto React com a API Node.js em execução localmente, conectando-se ao banco de dados PostgreSQL configurado. Certifique-se de ajustar as configurações conforme necessário para o seu ambiente.
