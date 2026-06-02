const mongoose = require("mongoose");

const jogoSchema = new mongoose.Schema({

    titulo: {
        type: String,
        required: true
    },

    franquia: {
        type: String,
        required: true
    },

    ano: Number,

    descricao: String

});

module.exports = mongoose.model("Jogo", jogoSchema);