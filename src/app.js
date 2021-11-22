const express = require('express');
const path = require('path');
const db = require('./database/sqlite3');
const cartaoController = require('./Controllers/cc-controller');

const app = express();

app.use(express.json())
app.use((req, res, next) => {
    console.log("Rodei o middleware")
    next()
})

cartaoController(app, db)

//===============================================\\
//Vai utlizar o ejs para renderizar 
//Setar a view engine para ser html
//Tudo que for estático na pasta public
//A pasta onde estão minhas views
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));
//===============================================\\

app.get('/', (req, res) => {
    res.render('index.ejs', { nome: 'Ilgner' })
})

module.exports = app;