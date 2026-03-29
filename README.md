# Projeto "Estágio por Equivalência" 
## Front-End

### Clonar o repositório:

Escolha a pasta que quer guardar o projeto

Botão direito dentro da pasta e selecione a opção "Open Git Bash Here" (Todos os comandos dessa parte serão no console do Git Bash)

git clone https://github.com/Projeto-Integrador-Equivalencia/front-end.git (Será criado uma pasta dentro da pasta que você selecionou)

cd front-end (Para entrar na pasta do projeto)

code . (Irá abrir o VSCode dentro da pasta que você entrou)

---

### Rodar localmente (Faça isso ao menos 1 vez antes de partir para o DOCKER):

Dentro do VSCode abra um terminal Git Bash (Se já estiver configurado é só clicar ctrl+shift+')

**Instalar dependências:**

npm install

**Executar:**

npm run dev

**Acessar:**

http://localhost:3000

Se funcionou então está tudo perfeito para trabalhar

**Parar:**

ctrl + C no Git Bash do VScode

---

### Rodar com Docker (RECOMENDADO):

**Build da imagem:**

docker build -t front-end .

**Executar container:**

docker run -p 3000:3000 front-end

**Acessar:**

http://localhost:3000

---

### Parar container

docker ps

docker stop <ID_DO_CONTAINER>