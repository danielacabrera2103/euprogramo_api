const express = require("express");
const { v4: uuidv4 } = require('uuid');

const conectaBancoDeDados = require("./bancoDeDados");// vinculando ao arquivo bancoDeDados
conectaBancoDeDados(); //chama a função de conexão com o banco de dados

const app = express();
app.use(express.json());

const porta = 3333;

// Array de mulheres
const mulheres = [
    {
        id: uuidv4(),
        nome: 'Daniela Cabrera',
        imagem: '',
        minibio: 'Analista e Desenvolvedora de Sistemas'
    },
    {
        id: uuidv4(),
        nome: 'Érika Cabrera',
        imagem: '',
        minibio: 'Técnica em Processamento de dados'
    },
    {
        id: uuidv4(),
        nome: 'Simara Conceição',
        imagem: 'https://bit.ly/3LJIyOF',
        minibio: 'Desenvolvedora e instrutora'
    },
    {
        id: uuidv4(),
        nome: 'Iana Chan',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'CEO & Founder da PrograMaria'
    },
    {
        id: uuidv4(),
        nome: 'Luana Pimentel',
        imagem: 'https://bit.ly/3FKpFaz',
        minibio: 'Senior Staff Software Engineer'
    }
];

// Função para criar uma nova mulher
function criaMulher(request, response) {
    const novaMulher = {
        id: uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    };
    mulheres.push(novaMulher);
    response.json(mulheres);
}

// Função para corrigir informações de uma mulher
function corrigeMulher(request, response) {
    const mulherEncontrada = mulheres.find(mulher => mulher.id === request.params.id);

    if (!mulherEncontrada) {
        return response.status(404).json({ error: "Mulher não encontrada" });
    }

    if (request.body.nome) {
        mulherEncontrada.nome = request.body.nome;
    }
    if (request.body.minibio) {
        mulherEncontrada.minibio = request.body.minibio;
    }
    if (request.body.imagem) {
        mulherEncontrada.imagem = request.body.imagem;
    }

    response.json(mulherEncontrada);
}

// Função para listar todas as mulheres
function mostraMulheres(request, response) {
    response.json(mulheres);
}

//DELETE
function deletaMulher(request, response) {
    function todasMenosEla(mulher) {
        if (mulher.id !== request.params.id) {
            return mulher
        }
    }
    const mulheresQueFicaram = mulheres.filter(todasMenosEla)
    response.json(mulheresQueFicaram)
}

// Função para mostrar a porta do servidor
function mostraPorta() {
    console.log('Servidor criado e rodando na porta: ', porta);
}

// Rotas
app.get('/mulheres', mostraMulheres); // Rota GET para listar mulheres
app.post('/mulheres', criaMulher); // Rota POST para criar uma nova mulher
app.patch('/mulheres/:id', corrigeMulher); // Rota PATCH para corrigir dados de uma mulher
app.delete('/mulheres/:id', deletaMulher)// Rota DELETE para deletar o registro de uma mulher

// Servidor ouvindo na porta definida
app.listen(porta, mostraPorta);
