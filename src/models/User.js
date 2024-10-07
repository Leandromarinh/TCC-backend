const mongoose = require("mongoose");

const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
  period: Number,
  subject: [
    {
      period: String,
      subjects: [
        {
          codigo: String,
          nome: String,
          ementa: String,
          credito: Number,
          prof: String,
          sala: String,
          preReq: String,
          hora: {
            hora1: { dia: String, inicio: String, fim: String },
            hora2: { dia: String, inicio: String, fim: String },
            hora3: { dia: String, inicio: String, fim: String },
          },
          nota: String,
          status: String,
          cargaHor: Number,
        },
      ],
    },
  ],
});

module.exports = User;
