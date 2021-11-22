const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const caminhoArq = path.resolve(__dirname,'database.db')
const db = new sqlite3.Database(caminhoArq);

// Cartão de crédito

const TABELA_CARTAO_CREDITO = `
    CREATE TABLE IF NOT EXISTS "CARTAO_DE_CREDITO" (
        "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
        "NUMERO" varchar(255),
        "NOME_DO_TITULAR" varchar(255),
        "VALIDADE" varchar(255)
    )
`;

const ADD_DADOS_CARTAO = `INSERT INTO CARTAO_DE_CREDITO 
        (ID, NUMERO, NOME_DO_TITULAR, VALIDADE)
        VALUES
        (1, '0000000000000000', 'JOSÉ LUIZ', '10/28'),
        (2, '0000000000000000', 'JOSÉ LUIZ', '10/28')
`

function criaTabelaCartao(){
    db.run(TABELA_CARTAO_CREDITO, (e)=>{
        if(e){
            console.log('Erro ao criar a tabela CARTAO_DE_CREDITO', e);
        }
    });
}

function insereTabelaCartao(){
    db.run(ADD_DADOS_CARTAO, (e)=>{
        if(e){
            console;log('Erro ao inserir os dados na tabela CARTAO_DE_CREDITO');
        }
    });
}

db.serialize(()=>{
    criaTabelaCartao();
    insereTabelaCartao();
})