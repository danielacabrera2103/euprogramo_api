const express = require("express");
const conectaBancoDeDados = require("./bancoDeDados"); // vinculando ao arquivo bancoDeDados
conectaBancoDeDados(); // chama a função de conexão com o banco de dados
const Mulher = require('./mulherModel');
const app = express();
const cors = require('cors')//pacote que permite consumir essa API no front-end
app.use(express.json());
app.use(cors());
const porta = 3333;

// Função para criar uma nova mulher
async function criaMulher(request, response) {
    const novaMulher = new Mulher({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao
    });

    try {
        const mulherCriada = await novaMulher.save();
        response.status(201).json(mulherCriada);
    } catch (erro) {
        response.status(500).json({ error: erro.message });
    }
}

// Função para corrigir informações de uma mulher
async function corrigeMulher(request, response) {
    try {
        const mulherEncontrada = await Mulher.findById(request.params.id);

        if (!mulherEncontrada) {
            return response.status(404).json({ error: "Mulher não encontrada" });
        }

        // Atualiza os campos fornecidos
        if (request.body.nome) mulherEncontrada.nome = request.body.nome;
        if (request.body.minibio) mulherEncontrada.minibio = request.body.minibio;
        if (request.body.imagem) mulherEncontrada.imagem = request.body.imagem;
        if (request.body.citacao) mulherEncontrada.imagem = request.body.citacao;

        const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save();
        response.json(mulherAtualizadaNoBancoDeDados);
    } catch (erro) {
        response.status(500).json({ error: erro.message });
    }
}

// Função para listar todas as mulheres
async function mostraMulheres(request, response) {
    try {
        const mulheresVindasDoBancoDeDados = await Mulher.find();
        response.json(mulheresVindasDoBancoDeDados);
    } catch (erro) {
        response.status(500).json({ error: erro.message });
    }
}

// Função para deletar uma mulher
async function deletaMulher(request, response) {
    try {
        const mulherDeletada = await Mulher.findByIdAndDelete(request.params.id);

        if (!mulherDeletada) {
            return response.status(404).json({ error: "Mulher não encontrada" });
        }

        response.json({ message: "Mulher deletada com sucesso" });
    } catch (erro) {
        response.status(500).json({ error: erro.message });
    }
}

// Função para mostrar a porta do servidor
function mostraPorta() {
    console.log('Servidor criado e rodando na porta: ', porta);
}

// Rotas
app.get('/mulheres', mostraMulheres); // Rota GET para listar mulheres
app.post('/mulheres', criaMulher); // Rota POST para criar uma nova mulher
app.patch('/mulheres/:id', corrigeMulher); // Rota PATCH para corrigir dados de uma mulher
app.delete('/mulheres/:id', deletaMulher); // Rota DELETE para deletar o registro de uma mulher

// Servidor ouvindo na porta definida
app.listen(porta, mostraPorta);
