const express = require('express');
const cors = require('cors')
const db = require('./database/sqlite3');
const cartaoCreditoController = require('./Controllers/CartaoCredito-controller');

const app = express();

app.use(express.json())
app.use((req, res, next) => {
    console.log("Rodei o middleware")
    res.header('Access-Control-Allow-Origin', '*')
    app.use(cors())
    next()

})

cartaoCreditoController(app, db)

//===============================================\\
//Vai utlizar o ejs para renderizar 
//Setar a view engine para ser html
//Tudo que for estático na pasta public
//A pasta onde estão minhas views
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
// app.use('/public', express.static(path.join(__dirname, 'public')));
// app.set('views', path.join(__dirname, '/views'));
// //===============================================\\

app.get('/', (req, res) => {
    res.send('Acesse alguma rota!')
})

module.exports = app;