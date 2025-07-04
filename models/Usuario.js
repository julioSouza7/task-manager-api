const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  cargo: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Usuario', UsuarioSchema);
