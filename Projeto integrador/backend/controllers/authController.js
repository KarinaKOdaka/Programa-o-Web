const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registrar = async (req, res) => {

    try {

        const { nome, email, senha } = req.body;

        const usuarioExiste = await Usuario.findOne({ email });

        if (usuarioExiste) {

            return res.status(400).json({
                mensagem: "Usuário já existe"
            });

        }

        const senhaHash = await bcrypt.hash(senha, 10);

        const usuario = await Usuario.create({
            nome,
            email,
            senha: senhaHash
        });

        res.status(201).json(usuario);

    } catch (erro) {

        res.status(500).json({
            mensagem: erro.message
        });

    }

};

exports.login = async (req, res) => {

    try {

        const { email, senha } = req.body;

        const usuario = await Usuario.findOne({ email });

        if (!usuario) {

            return res.status(400).json({
                mensagem: "Usuário não encontrado"
            });

        }

        const senhaValida = await bcrypt.compare(
            senha,
            usuario.senha
        );

        if (!senhaValida) {

            return res.status(401).json({
                mensagem: "Senha inválida"
            });

        }

        const token = jwt.sign(

            {
                id: usuario._id
            },

            process.env.JWT_SECRET,

            {
                expiresIn: "1d"
            }

        );

        res.json({
            token
        });

    } catch (erro) {

        res.status(500).json({
            mensagem: erro.message
        });

    }

};