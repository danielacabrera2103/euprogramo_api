const { MongoClient, ServerApiVersion } = require('mongodb');

require('dotenv').config(); // Carrega as variáveis do arquivo .env

const uri = process.env.MONGO_URL;

console.log(uri); // Debug

const mongoose = require('mongoose');


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });



  async function conectaBancoDeDados() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }

  conectaBancoDeDados().catch(console.dir);

  /*

async function conectaBancoDeDados() {
    try {
        console.log('Tentando conectar ao banco de dados...');

        console.log('MONGO_URL:', process.env.MONGO_URL); // Debug

        // Conectando ao banco de dados usando a variável MONGO_URL
        await mongoose.connect(process.env.MONGO_URL);

        console.log('Conexão com banco de dados feita com sucesso!');
    } catch (erro) {
        console.log('Erro de conexão com o banco de dados:', erro);
    }
}
    */

module.exports = conectaBancoDeDados;
















