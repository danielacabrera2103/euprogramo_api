// declaração de constantes
const express = require("express")

const { v4: uuidv4 } = require('uuid');

// chamo o gerenciador de rotas
const router = express.Router()

// atribuo um alias para o pacote express
const app = express()
app.use(express.json())
// seto a porta que o servidor vai responder
const porta = 3333

// constante com o array de mulheres
const mulheres = [
    {
        id: 1,
        nome: 'Daniela Cabrera',
        imagem: '',
        minibio: 'Analista e Desenvolvedora de Sistemas'
    },
    {
        id: 2,
        nome: 'Érika Cabrera',
        imagem: '',
        minibio: 'Técnica em Processamento de dados'
    },
    {
        id: 3,
        nome: 'Simara Conceição',
        imagem: 'https://bit.ly/3LJIyOF',
        minibio: 'Desenvolvedora e instrutora'
    },
    {
        id: 4,
        nome: 'Iana Chan',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'CEO & Founder da PrograMaria'
    },

    {
        id: 4,
        nome: 'Luana Pimentel',
        imagem: 'https://bit.ly/3FKpFaz',
        minibio: 'Senior Staff Software Engineer'
    }

]

function criaMulher(request, response){
    const novaMulher = {
        id: uuidv4(),
        nome:request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    }
    mulheres.push(novaMulher)
    response.json(mulheres) 
}

function mostraMulheres(request, response) {
    // configuro o servidor para retornar um arquivo json como resposta
    response.json(mulheres)
}

function mostraPorta() {
    console.log('Servidor criado e rodando na porta: ', porta)
}
//GET
app.use(router.get('/mulheres', mostraMulheres))//configurei a rota GET
//POST
app.use(router.post('/mulheres', criaMulher))//configurei a rota POST

app.listen(porta, mostraPorta)