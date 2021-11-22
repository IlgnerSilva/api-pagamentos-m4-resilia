const CartaoCreditoDAO = require('../DAO/cc-dao');

const cartao = (app, db)=>{
    const daoCartaoCredito = new CartaoCreditoDAO(db)

    app.get('/pagamento', async (req, res)=>{
        try{
            const resCartaoCredito = await daoCartaoCredito.getCartao()
            res.render('index.ejs', {listaCartao:resCartaoCredito})
        }catch(error){
            res.send(error)
        }
    })
}

module.exports = cartao;