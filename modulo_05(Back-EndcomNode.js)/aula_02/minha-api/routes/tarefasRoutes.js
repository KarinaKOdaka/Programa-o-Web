const express = require('express')

const router = express.Router()

const {
    listarTarefas,
    criarTarefa,
    atualizarTarefa,
    deletarTarefa
} = require('../controllers/tarefasController')

const validarTitulo = require('../middlewares/validarTitulo')

// GET
router.get('/', listarTarefas)

// POST
router.post('/', validarTitulo, criarTarefa)

// PUT
router.put('/:id', validarTitulo, atualizarTarefa)

// DELETE
router.delete('/:id', deletarTarefa)

module.exports = router