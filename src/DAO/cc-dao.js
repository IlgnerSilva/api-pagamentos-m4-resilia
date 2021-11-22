class CartaoCreditoDAO{
    constructor(db){
        this.db = db
    }

    getCartao(){
        return new Promise((resolve, reject)=>{
            const query = 'SELECT * FROM CARTAO_DE_CREDITO '
            this.db.all(query, (erro, res)=>{
                if(erro){
                    reject(`Sem conexão com banco de dados ${erro}`)
                }else{
                    resolve(res)
                }
            })
        })
    }
}

module.exports = CartaoCreditoDAO;