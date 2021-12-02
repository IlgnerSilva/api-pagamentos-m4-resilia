const express = require('express');
const cors = require('cors')
const db = require('./database/sqlite3');
const cartaoCreditoController = require('./Controllers/CartaoCredito-controller');
const app = express();

//middlewares e habilitando cors
app.use(express.json())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    app.use(cors())
    next()

})

//instanciando Controller
cartaoCreditoController(app, db)

//Rota raiz 
app.get('/', (req, res) => {
    res.json({
        "GET": '/Pagamento',
        "GET ID": '/Pagamento/1',
        "GET ID": '/Pagamento/1',
        "POST": '/Pagamento',
        "DELETE ID": '/Pagamento/delete/1',
        "PUT ID": '/Pagamento/atualiza/1',
    })
})

module.exports = app;