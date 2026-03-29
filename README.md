#Projeto "Estágio por Equivalência" 
##Front-End

---

###Clonar o repositório:

git clone https://github.com/Projeto-Integrador-Equivalencia/front-end.git
cd front-end

---

###Rodar localmente:

**Instalar dependências: **

npm install

**Executar: **

npm run dev

**Acessar: **

http://localhost:3000

###Rodar com Docker

**Build da imagem: **

docker build -t front-end .

**Executar container: **

docker run -p 3000:3000 front-end

**Acessar: **

http://localhost:3000

###Parar container
docker ps
docker stop <ID_DO_CONTAINER>