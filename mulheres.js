// declaração de constantes
const express = require("express")

// chamo o gerenciador de rotas
const router = express.Router()

// atribuo um alias para o pacote express
const app = express()

// seto a porta que o servidor vai responder
const porta = 3333

// constante com o array de mulheres
const mulheres = [
    {
        nome: 'Daniela Cabrera',
        imagem: '',
        minibio: 'Analista e Desenvolvedora de Sistemas'
    },
    {
        nome: 'Érika Cabrera',
        imagem: '',
        minibio: 'Técnica em Processamento de dados'
    },
    {
        nome: 'Simara Conceição',
        imagem: 'https://bit.ly/3LJIyOF',
        minibio: 'Desenvolvedora e instrutora'
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'CEO & Founder da PrograMaria'
    },

    {
        nome: 'Luana Pimentel',
        imagem: 'https://bit.ly/3FKpFaz',
        minibio: 'Senior Staff Software Engineer'
    }

]

function mostraMulheres(request, response) {
    // configuro o servidor para retornar um arquivo json como resposta
    response.json(mulheres)
}

function mostraPorta() {
    console.log('Servidor criado e rodando na porta: ', porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)