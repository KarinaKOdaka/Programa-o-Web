const Jogo = require("../models/Jogo");

exports.listarJogos = async (req, res) => {

    const jogos = await Jogo.find();

    res.json(jogos);

};

exports.buscarJogo = async (req, res) => {

    const jogo = await Jogo.findById(req.params.id);

    res.json(jogo);

};

exports.criarJogo = async (req, res) => {

    const jogo = await Jogo.create(req.body);

    res.status(201).json(jogo);

};

exports.editarJogo = async (req, res) => {

    const jogo = await Jogo.findByIdAndUpdate(

        req.params.id,

        req.body,

        {
            new: true
        }

    );

    res.json(jogo);

};

exports.excluirJogo = async (req, res) => {

    await Jogo.findByIdAndDelete(req.params.id);

    res.json({
        mensagem: "Jogo removido"
    });

};