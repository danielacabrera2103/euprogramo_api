require('dotenv').config(); // Carrega as variáveis do arquivo .env
const mongoose = require('mongoose');

// Obtém a URI do banco de dados a partir das variáveis de ambiente
const uri = process.env.MONGO_URL;

async function conectaBancoDeDados() {
    try {
        console.log('Tentando conectar ao banco de dados...');

        // Verifica se a URI do banco de dados está presente
        if (!uri) {
            throw new Error('A variável MONGO_URL não está definida no arquivo .env');
        }

        console.log('MONGO_URL:', uri); // Debug

        // Conectando ao banco de dados usando Mongoose
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Conexão com banco de dados feita com sucesso!');
    } catch (erro) {
        console.error('Erro de conexão com o banco de dados:', erro.message);
    }
}

module.exports = conectaBancoDeDados;
