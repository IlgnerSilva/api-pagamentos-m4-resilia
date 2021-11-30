const CartaoCreditoDAO = require('../DAO/CartaoCredito-DAO');
const CartaoDeCredito = require('../Model/CartaoDeCredito')

const cartao = (app, db)=>{
    const daoCartaoCredito = new CartaoCreditoDAO(db)

    app.get('/pagamento',  async (req, res)=>{
        try{
            const buscaTodosCartoes =  await daoCartaoCredito.getTodosCartoes()
            res.json({
                Usuarios: buscaTodosCartoes
            })
        }catch(error){
            res.json({
                error: error.message
            })
        }
    });

    app.get('/pagamento/:ID', async (req, res)=>{
        try{
            const id = req.params.ID;
            const resUmcartao = await daoCartaoCredito.getUmcartao(id);
            res.json({
                Users: resUmcartao,
                error: false
            }) 
        }catch(error){
            res.json({
                error: error.message
            })
        }
    })

    app.post('/pagamento', async(req, res)=>{
        try{
            const body = req.body
            //Tratamento de dados pela Model
            const verificaDados = new CartaoDeCredito(body.NUMERO, body.NOME_DO_TITULAR, body.VALIDADE)
            //===============================
            const criaNovoCartao = [verificaDados.numeroCartao, verificaDados.nomeTitular, verificaDados.validade]
            //Cria novo Cartão e insere no banco de dados
            const resNovoCartao = await daoCartaoCredito.novoCartao(criaNovoCartao)
            //Busca o ultimo cartão adicionado
            const buscaTodosCartoes =  await daoCartaoCredito.getBuscaUltimoCartao()

            res.json({
                cartao_adiconado: buscaTodosCartoes
            })
            
        }catch(error){
            res.json({
                error: error.message
            })
        }
    })

    app.delete('/pagamento/delete/:ID', async(req, res)=>{
        try{
            const id = req.params.ID;
            const deletaCartao = await daoCartaoCredito.deleteCartao(id)

            res.json({resposta: deletaCartao})
        }catch{
            res.send('error')
        }
    })

    app.put('/pagamento/atualiza/:ID', async(req, res)=>{
        try{
            const id = req.params.ID;

            const body = req.body;
            const verificaDados = new CartaoDeCredito(body.NUMERO, body.NOME_DO_TITULAR, body.VALIDADE)

            const dadosAtualizados = [verificaDados.numeroCartao, verificaDados.nomeTitular, verificaDados.validade]

            const cartãoAtualizado = await daoCartaoCredito.atualizaCartao(dadosAtualizados, id);
            const resUmcartao = await daoCartaoCredito.getUmcartao(id);

            res.json({
                atualizado: cartãoAtualizado,
                cartao: resUmcartao
            })
        }catch(error){
            res.send(error)
        }
    })
}

module.exports = cartao;