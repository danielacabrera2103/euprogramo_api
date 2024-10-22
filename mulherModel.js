const mongoose = require('mongoose')
//cria o objeto mulher
const mulherSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    imagem: {
        type: String,
        required: true
    },
    citacao: {
        type: String,
        required: true
    },
    minibio: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('diva', mulherSchema)// nome da lista no mongoDB