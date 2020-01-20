const expresss = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const http = require('http')
const cors = require('cors')
const { setupWebsocket } = require('./websocket')

const app = expresss()
const server = http.Server(app)

setupWebsocket(server)

app.use(cors()) // habilitar o acesso a nossa api
app.use(expresss.json()) // entender requisicoes com corpo json
app.use(routes)

// Tipos de parametros:
// Query Params: req.query (Filtros, ordecacao, paginacao ...) ?p=1
// Route Params: req.params (Identificar um recurso na alteracao ou remocao) /users/:id
// Body: req.body (Dados para criacao ou alteracao de um registro)

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-j5sgp.mongodb.net/semana10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

server.listen(3333)
