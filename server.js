// declaração de constantes
const express = require("express")

// atribuo um alias para o pacote express
const app = express()

// seto a porta que o servidor vai responder
const porta = 3333

// função para mostrar o número da porta que o node está respondendo
function mostraPorta() {
    // imprime no terminal
    console.log("Servidor criado e rodando na porta: ", porta)
}

app.listen(porta, mostraPorta)
