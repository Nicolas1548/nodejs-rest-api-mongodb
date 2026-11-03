import "dotenv/config";
import express from "express"
import mongoose from "mongoose";

const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
    console.error("Erro: variável de ambiente MONGODB_URI não definida no arquivo .env");
    process.exit(1);
}

mongoose.connect(mongoUri);

const app = express();
app.use(express.json());

const Usuario = mongoose.model('Usuario', {
    nome: String,
    idade: Number,
    email: String
})

app.get('/', async (req, res) => {
    res.status(200).send("Bem vindo!!!")
})

app.get('/Usuario', async (req, res) => {
    const users = await Usuario.find()
    res.status(200).send(users)
})

app.post('/Usuario', async (req, res) => {
    const user = new Usuario({
        nome: req.body.nome,
        idade: req.body.idade,
        email: req.body.email
    })
    await user.save()
    res.status(201).send("Usuario registrado!")
})

app.put('/Usuario/:id', async (req, res) => {
    const user = await Usuario.findByIdAndUpdate(req.params.id, {
        nome: req.body.nome,
        idade: req.body.idade,
        email: req.body.email
    })
    res.status(201).send("Usuario alterado com sucesso!")
})

app.delete('/Usuario/:id', async (req, res) => {
    const user = await Usuario.findByIdAndDelete(req.params.id)
    res.status(200).send("Usuario removido com sucesso!")
})

export default app