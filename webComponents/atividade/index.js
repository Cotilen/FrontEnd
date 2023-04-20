'use strict'

import { produtos } from "./produtos.js"

const criarCard = (produto) => {
    const card = document.createElement('card-produtos')

    card.title = produto.name
    card.descricao = produto.description
    card.preco = produto.price
    card.foto = `./img/${produto.image}`

    return card
}

const carregarProdutos = () => {
    const container = document.getElementById('container')
    const cards = produtos.map(criarCard)

    container.replaceChildren(...cards)

}
carregarProdutos()

// const precos = [10, 23, 51, 90]


// const limite = precos.length
// const precosFrete = []
// for (let i = 0; i < limite; i++) {

//     precosFrete[i] = precos[i] + 2
// }

// const limite = precos.length
// const precosFrete = []
// let i = 0
// while (i < limite) {
//     precosFrete[i] = precos[i] + 2
//     i++
// }

// const adicionarFrete = (preco) => preco + 2
// const precosFrete = precos.map(adicionarFrete)

// console.log(precosFrete)