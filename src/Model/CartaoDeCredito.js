class CartaoDeCredito{
    constructor(numeroCartao,nomeTitular,validade){
        this.numeroCartao = this.verificaNumeroCartao(numeroCartao)
        this.nomeTitular = nomeTitular
        this.validade = validade
    }
    verificaNumeroCartao(numeroCartao){
        if(numeroCartao.length == 16){
            return numeroCartao;
        }else{
            console.log('foi')
            throw new Error ('A senha deve conter 16 numeros válidos')
        }
    }
}

module.exports = CartaoDeCredito;