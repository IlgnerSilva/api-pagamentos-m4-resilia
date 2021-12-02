let app = document.querySelector('.app')
async function render() {
    const resp = await fetch('https://api-pagamento-m4.herokuapp.com/pagamento/48')
    const dados = await resp.json()

    for (i in dados.Users) {
        let guarda = document.createElement('div')
        guarda.innerHTML = `
        
        <div class="circles">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
        </div>
        <div class="card-group">
        <div class="card">
            <div class="logo"><img src="./logo.png" alt="Visa"></div
            <div class="chips"><img id="idchip" src="chip.png" alt="chip"></div>
            <div class="number">${dados.Users[i].NUMERO}</div>
            <div class="name">${dados.Users[i].NOME_DO_TITULAR}</div>
            <div class="from">${dados.Users[i].VALIDADE}</div>
        </div>
    </div>`
        app.appendChild(guarda)
    }
}
render()