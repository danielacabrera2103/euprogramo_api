// declaração de constantes
const express = require("express")

// chamo o gerenciador de rotas
const router = express.Router()

// atribuo um alias para o pacote express
const app = express()

// seto a porta que o servidor vai responder
const porta = 3333

function mostraMulher(request, response) {
    // configuro o servidor para retornar um arquivo json como resposta
    response.json({
        nome: 'Daniela Cabrera',
        imagem: '',
        minibio: 'Analista e Desenvolvedora de Sistemas'
    })
}

function mostraPorta(){
    console.log('Servidor criado e rodando na porta: ', porta)
}


app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)