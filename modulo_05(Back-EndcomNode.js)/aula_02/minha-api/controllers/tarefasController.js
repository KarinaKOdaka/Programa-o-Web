const tarefas = require('../models/tarefasModel')

// GET
const listarTarefas = (req, res) => {
    res.json(tarefas)
}

// POST
const criarTarefa = (req, res) => {

    const { titulo } = req.body

    const novaTarefa = {
        id: tarefas.length + 1,
        titulo
    }

    tarefas.push(novaTarefa)

    res.status(201).json(novaTarefa)
}

// PUT
const atualizarTarefa = (req, res) => {

    const { id } = req.params
    const { titulo } = req.body

    const tarefa = tarefas.find(t => t.id == id)

    if (!tarefa) {
        return res.status(404).json({
            erro: 'Tarefa não encontrada'
        })
    }

    tarefa.titulo = titulo

    res.json(tarefa)
}

// DELETE
const deletarTarefa = (req, res) => {

    const { id } = req.params

    const index = tarefas.findIndex(t => t.id == id)

    if (index === -1) {
        return res.status(404).json({
            erro: 'Tarefa não encontrada'
        })
    }

    tarefas.splice(index, 1)

    res.json({
        mensagem: 'Tarefa removida'
    })
}

module.exports = {
    listarTarefas,
    criarTarefa,
    atualizarTarefa,
    deletarTarefa
}