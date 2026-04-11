# 🚀 Desenvolvimento com Dev Container

Este projeto utiliza **Docker + Dev Containers** para garantir um ambiente de desenvolvimento **padronizado e isolado**, evitando problemas de configuração entre diferentes máquinas.

---

## 📋 Pré-requisitos

### Windows / Mac

* **Docker Desktop** → já inclui Docker e Docker Compose
* **Visual Studio Code**
* Extensão **Dev Containers**

### Linux

* **Docker**
* **Docker Compose** *(caso não esteja incluído na sua instalação)*
* **Visual Studio Code**
* Extensão **Dev Containers**

Verifique se o Docker Compose está disponível:

```bash
docker compose version
```

---

## ▶️ Inicialização do projeto

### 1. Clonar o repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_PROJETO>
```

Baixa o projeto para sua máquina e acessa a pasta.

---

### 2. Abrir no VS Code

```bash
code .
```

Abre o projeto no VS Code, onde o Dev Container será utilizado.

---

### 3. Iniciar o Dev Container

No VS Code:

* Pressione `Ctrl + Shift + P` (Caso ele não tenha iniciado com o Dev Container)
* Execute: **Dev Containers: Reopen in Container**

Isso fará com que o VS Code:

* Construa o container Docker
* Instale as dependências do projeto
* Abra o ambiente já dentro do container

⏳ Na primeira execução pode levar alguns minutos.

---

## ⚙️ Execução da aplicação

Após o container iniciar, execute:

```bash
npm install
```

Esse comando baixa todas as bibliotecas listadas no *package.json* e as armazena na pasta *node_modules*.

Com as dependencias insaladas, execute:

```bash
npm run dev
```

Esse comando inicia o servidor de desenvolvimento.

A aplicação estará disponível em:

```
http://localhost:3000
```

---

## 🔄 Uso com Docker existente

Se você já utilizava o projeto com Docker:

* O Dev Container utilizará a **mesma configuração existente**
* Não é necessário alterar seu fluxo de desenvolvimento

⚠️ Importante: não execute Docker manualmente e Dev Container ao mesmo tempo.

Antes de iniciar o Dev Container, pare containers ativos:

```bash
docker compose down
```

---

## 🔄 Comandos úteis

### Rebuild do container

```
Dev Containers: Rebuild Container
```

Reconstrói o ambiente quando houver mudanças em arquivos de configuração (Dockerfile, DevContainer, etc).

---

### Rebuild completo (sem cache)

```
Dev Containers: Rebuild Container Without Cache
```

Força a recriação total do ambiente. Use em caso de erros.

---

## 📁 Estrutura do ambiente

* `Dockerfile` → Define o ambiente Node.js utilizado
* `docker-compose.yml` → Configura e sobe o serviço da aplicação
* `.devcontainer/` → Integra o container com o VS Code

---

## ⚠️ Diretrizes para a equipe

* Utilize sempre o Dev Container para desenvolvimento
* Não instale dependências fora do container
* Evite rodar Docker manualmente junto com o Dev Container
* Após alterações em arquivos de configuração, faça rebuild

