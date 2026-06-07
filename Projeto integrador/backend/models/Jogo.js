const mongoose = require("mongoose");

const jogoSchema = new mongoose.Schema({

    nome: {
        type: String,
        required: true
    },

    franquia: {
        type: String,
        required: true
    },

    descricao: {
        type: String,
        required: true
    },

    criadoEm: {
        type: Date,
        default: Date.now
    }

});

module.exports =
    mongoose.model("Jogo", jogoSchema);