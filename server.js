const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const usuarioRoutes = require('./routes/usuarioRoutes');

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/usuarios', usuarioRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Conectado ao MongoDB');
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
})
.catch((err) => console.error('Erro ao conectar ao MongoDB:', err));
