// declaração de constantes
const express = require("express")

// chamo o gerenciador de rotas
const router = express.Router()

// atribuo um alias para o pacote express
const app = express()

// seto a porta que o servidor vai responder
const porta = 3333

function mostraHora(request, response) {

    const data = new Date()
   
    const hora = data.toLocaleTimeString('pt-BR')
   
    response.send(hora)
   
   }


   
function mostraPorta() {
    console.log('Servidor criado e rodando na porta: ', porta)
}

app.use(router.get('/horas', mostraHora))
app.listen(porta, mostraPorta)