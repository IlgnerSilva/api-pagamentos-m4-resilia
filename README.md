# Projeto módulo 4, entidade Pagamentos

## Descrição do projeto
<p align='center'>A aplicação é uma API da entidade pagamentos onde pode ser consultado quantos cartões de credito determidado usuario pode ter</p>

### O que a aplicação retorna:

```json
{
     "Usuarios": [
    {
      "ID": 42,
      "NUMERO": "1234567890123456",
      "NOME_DO_TITULAR": "Lucas",
      "VALIDADE": "20/25"
    }
  ]
}
```
## Ferramentas utilizadas:
Para desenvolvimento foi utliazado a linguagem de programação Javascript, Nodejs com ambiente, a lib Sqlite3 e o framework Express.
A API se encontra hospedada na Heroku.

## Dependencias necessárias:
```js
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "sqlite3": "^5.0.2"
  }
```
## Requisitos para iniciar a API localmente
Instalar o Nodejs versão 16.x LTS ou superior
## Para instalção local utilize:
1 - Se estiver no windows abra o powershell, se for no linux abra o de sua preferencia e execute o seguinte comando abaixo:
```
git clone https://github.com/IlgnerSilva/api-pagamentos-m4-resilia && cd ./api-pagamentos-m4-resilia && npm install
```
## Inicialização da aplicação via terminal utilize:
```
npm run start
```

## Rotas da api:
Busca de todos os cartões, exemplo abaixo:
GET /pagamento
```json
  "Usuarios": [
    {
      "ID": 42,
      "NUMERO": "1234567890123456",
      "NOME_DO_TITULAR": "Lucas",
      "VALIDADE": "20/25"
    },
    {
      "ID": 43,
      "NUMERO": "9876543212345678",
      "NOME_DO_TITULAR": "Pedro",
      "VALIDADE": "20/25"
    }
  ]
```

Busca de um expecífico pelo ID, exemplo abaixo:
GET /pagamento/1
```json
  "Users": [
    {
      "ID": 43,
      "NUMERO": "9876543212345678",
      "NOME_DO_TITULAR": "Pedro",
      "VALIDADE": "20/25"
    }
  ],
  "error": false
```

Inserção de dados, entrada esperada
 POST /pagamentos
 ```js
	{
		"NUMERO": "9876543212345678",
		"NOME_DO_TITULAR": "Pedro",
		"VALIDADE": "20/25"
	}
 ```   
Saída:
```json

  "cartao_adiconado": [
    {
      "ID": 43,
      "NUMERO": "9876543212345678",
      "NOME_DO_TITULAR": "Pedro",
      "VALIDADE": "20/25"
    }
  ]
```
Deleta cartão de acordo com id passado, como no exemplo abaixo:
DELETE pagamento/delete/41
 ```js
{
  "resposta": "Cartão deletado"
}
 ```  
 Exemplo de consumo

 <img src="./consomeAPI/frontCartao.png"/>

