const { response } = require("express")

class CartaoCreditoDAO{
    constructor(db){
        this.db = db
    };

    getTodosCartoes(){
        return new Promise((resolve, reject)=>{
            this.db.all('SELECT * FROM CARTAO_DE_CREDITO', (erro, res)=>{
                if(erro){
                    reject(`Sem conexão com banco de dados ${erro}`)
                }else{
                    resolve(res)
                }
            })
        })
    };

    getUmcartao(id){
        return new Promise((resolve, reject)=>{
            this.db.all('SELECT * FROM CARTAO_DE_CREDITO WHERE ID = (?)', id, (error, res)=>{
                //setTimeout(() => {
                    if(error){
                        reject(`Não foi encontrado nenhum Cartão com esse ID ${error}`)
                    }else{
                        resolve(res)
                    }
                //}, 5000);
            })
        })
    }

    getBuscaUltimoCartao(){
        return new Promise((resolve, reject)=>{
            this.db.all('SELECT * FROM CARTAO_DE_CREDITO ORDER BY ID DESC LIMIT 1', (erro, res)=>{
                if(erro){
                    reject(`Sem conexão com banco de dados ${erro}`)
                }else{
                    resolve(res)
                }
            })
        })
    };

    novoCartao(dados){
        return new Promise((resolve, reject)=>{
            const guradaDados = [dados[0], dados[1], dados[2]]
            this.db.run('INSERT INTO CARTAO_DE_CREDITO (NUMERO, NOME_DO_TITULAR, VALIDADE) VALUES(?,?,?)', guradaDados, (erro, res)=>{
                if(erro){
                    reject(`Sem conexão com banco de dados ${erro}`)
                }else{
                    resolve(res)
                }
            })
        })
    }

    deleteCartao(id){
        return new Promise((resolve, reject)=>{
            this.db.run('DELETE FROM CARTAO_DE_CREDITO WHERE ID = (?)', id, (error, response)=>{
                if(error){
                    console.log('Erroi')
                    reject(`Erro ao deletar. ${error}`)
                }else{
                    resolve('Cartão deletado')
                }
            })
        })
    }

    atualizaCartao(dados, id){
        return new Promise((resolve, reject)=>{
            const guardadadosArualizados = [dados[0], dados[1], dados[2]];
            this.db.run('UPDATE CARTAO_DE_CREDITO SET NUMERO = (?), NOME_DO_TITULAR = (?), VALIDADE = (?) WHERE ID = (?)', guardadadosArualizados, (error, response)=>{
                if(error){
                    reject(`Erro ao atualizar cartão. ${error}`)
                }else{
                    console.log(guardadadosArualizados)
                    resolve("Cliente Atualizado")
                }
            })
        })
    }

}

module.exports = CartaoCreditoDAO;