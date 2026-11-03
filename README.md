# Minhas APIs — Estudos de Back-end com Node.js, Express e MongoDB

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB_Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)


Repositório prático reunindo a evolução dos meus estudos de desenvolvimento **Back-end e APIs RESTful com Node.js**, partindo de servidores HTTP nativos até APIs completas com **Express.js**, persistência em nuvem no **MongoDB Atlas (Mongoose ODM)**, variáveis de ambiente (`dotenv`) e pipeline de Integração Contínua (**GitHub Actions**).

---

## Estrutura dos Projetos

| Pasta | Porta Padrão | Tecnologias | Descrição |
| :--- | :---: | :--- | :--- |
| `primeira-api/` | `3001` | Node.js (`http`) | Primeiro servidor HTTP nativo respondendo requisições em texto plano. |
| `segunda-api/` | `3002` | Node.js (`http`) | Servidor HTTP nativo com roteamento básico mapeado por URL (`/usuarios`, `/grupos`, `/programas`, `/unidades`). |
| `terceira-api/` | `3003` | Node.js + Express | API REST em memória com operações CRUD completas (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`) e tratamento de `404` para `/grupos`, `/unidades` e `/usuarios`. |
| `API/` | `3010` | Express + Mongoose + Dotenv | API REST integrada ao **MongoDB Atlas** realizando CRUD assíncrono (`async/await`) da entidade `User` (`nome`, `email`, `idade`). |
| `API-ALUNOS/` | `3020` | Express + Mongoose + Dotenv | API REST modularizada (`server.js` + `src/app.js`) integrada ao **MongoDB Atlas** para gerenciamento de `Usuario` nas rotas `/Usuario`. |

---

## Tecnologias Utilizadas

- **Node.js** (ES Modules — `import`/`export`)
- **Express.js** — Roteamento HTTP, middlewares JSON e status codes REST
- **MongoDB Atlas & Mongoose ODM** — Modelagem de schemas e persistência NoSQL em nuvem
- **Dotenv** — Gerenciamento seguro de credenciais via variáveis de ambiente (`.env`)
- **Nodemon** — Reload automático em ambiente de desenvolvimento

---

## Como Executar Localmente

### Pré-requisitos
- **Node.js** (v18 ou superior)
- Conta/Cluster no **MongoDB Atlas** *(necessário apenas para `API` e `API-ALUNOS`)*

### 1. Clonar o repositório
```bash
git clone https://github.com/Nicolas1548/nodejs-rest-api-mongodb
cd minhas-api
```

### 2. Executar as APIs sem banco externo (`primeira-api`, `segunda-api` ou `terceira-api`)
```bash
cd terceira-api
npm install
npm run dev
```

### 3. Executar as APIs com MongoDB Atlas (`API` ou `API-ALUNOS`)
1. Entre na pasta desejada (`cd API` ou `cd API-ALUNOS`) e instale as dependências:
   ```bash
   npm install
   ```
2. Crie um arquivo `.env` a partir do modelo `.env.example` e preencha sua string de conexão do MongoDB Atlas:
   ```env
   MONGODB_URI=mongodb+srv://<USUARIO>:<SENHA>@api.uay4t.mongodb.net/?retryWrites=true&w=majority&appName=API
   ```
3. Inicie o servidor:
   ```bash
   npm run dev
   ```

---

## Principais Rotas (Exemplos)

### `API-ALUNOS` (`http://localhost:3020`)
| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `GET` | `/Usuario` | Lista todos os usuários cadastrados no MongoDB |
| `POST` | `/Usuario` | Cadastra um novo usuário (`{ "nome", "idade", "email" }`) |
| `PUT` | `/Usuario/:id` | Atualiza os dados de um usuário pelo ID |
| `DELETE` | `/Usuario/:id` | Remove um usuário pelo ID |

### `terceira-api` (`http://localhost:3003`)
- CRUD completo em memória para os recursos `/grupos`, `/unidades` e `/usuarios` (`GET`, `GET /:id`, `POST`, `PUT /:id`, `PATCH /:id`, `DELETE /:id`).

---

## Autor

Desenvolvido por **Nicolas Gabriel** — [@Nicolas1548](https://github.com/Nicolas1548)
