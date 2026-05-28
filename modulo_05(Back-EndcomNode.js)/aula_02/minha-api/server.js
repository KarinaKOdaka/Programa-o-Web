const express = require('express')

const app = express()

const tarefasRoutes = require('./routes/tarefasRoutes')

const logger = require('./middlewares/logger')
const errorHandler = require('./middlewares/errorHandler')

app.use(express.json())

app.use(logger)

app.use('/tarefas', tarefasRoutes)

app.use(errorHandler)

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})