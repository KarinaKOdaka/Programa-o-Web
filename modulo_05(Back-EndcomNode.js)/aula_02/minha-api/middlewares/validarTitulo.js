const validarTitulo = (req, res, next) => {

    const { titulo } = req.body

    if (!titulo || titulo.trim() === '') {

        return res.status(400).json({
            erro: 'O título é obrigatório'
        })
    }

    next()
}

module.exports = validarTitulo