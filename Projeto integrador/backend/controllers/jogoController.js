const Jogo =
    require("../models/Jogo");

exports.listar =
    async (req, res) => {

        const jogos =
            await Jogo.find();

        res.json(jogos);
};

exports.criar =
    async (req, res) => {

        const jogo =
            await Jogo.create(req.body);

        res.status(201).json(jogo);
};

exports.atualizar =
    async (req, res) => {

        const jogo =
            await Jogo.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );

        res.json(jogo);
};

exports.excluir =
    async (req, res) => {

        await Jogo.findByIdAndDelete(
            req.params.id
        );

        res.json({
            mensagem: "Excluído"
        });
};