// declaração de constantes
const express = require("express")

// chamo o gerenciador de rotas
const router = express.Router()

// atribuo um alias para o pacote express
const app = express()

// seto a porta que o servidor vai responder
const porta = 3333

// função para mostrar alguma resposta quando houver requisição pelo browser
function mostraOla(request, response) {
    response.send("Olá, Mundo!")
}

// função para mostrar o número da porta que o node está respondendo
function mostraPorta() {
    // imprime no terminal
    console.log("Servidor criado e rodando na porta: ", porta)
}

// ao chamar a rota get em ola a mensagem da função mostraOla será mostrada// imprime no terminal
app.use(router.get('/ola', mostraOla))

app.listen(porta, mostraPorta)
