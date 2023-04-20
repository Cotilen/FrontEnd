"use strict"

class card extends HTMLElement {
    constructor() {
        super()

        this.shadow = this.attachShadow({ mode: 'open' })
        this.title = 'Produto'
        this.descricao = 'Deescrição'
        this.preco = 'Preço'
        this.foto = null
    }

    static get observedAttributes() {
        return ['title', 'descricao', 'preco', 'foto']

    }

    attributeChangedCallback(nameAttr, oldValue, newValue) {
        this[nameAttr] = newValue
    }

    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }

    styles() {
        const css = document.createElement('style')
        css.textContent = `
        *{
            padding:0;
            margin:0;
            box-sizing:0;
        }
        
        .card {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            gap: 12px;
            border: 1px solid #ddd;
            border-radius: 5px;
            box-shadow: 0px 0px 8px #0006;
            padding: 10px;
            cursor: pointer;
        }
        
        .card:hover {
            box-shadow: 0px 0px 8px red;
        }
        
        .card__image {
            height: 200px;
            width: 200px;
            object-fit: contain;
        }
        
        .card__title {
            font-size: 1.5rem;
        }
        
        .card__description {
            font-size: 1rem;
            text-align: justify;
            width: 300px;
        }
        
        .card__price {
            width: 100%;
            font-size: 1.5rem;
            font-weight: 900;
        }
        `

        return css

    }
    component() {
        const card = document.createElement('div')
        card.classList.add('card')
        const nome = document.createElement('h5')
        nome.classList.add('card__title')
        nome.textContent = this.title
        const imagem = document.createElement('img')
        imagem.classList.add('card__image')
        const description = document.createElement('p')
        description.classList.add('card__description')
        description.textContent = this.descricao
        const price = document.createElement('span')
        price.classList.add('card__price')
        price.textContent = this.preco

        card.append(nome, imagem, description, price)

        return card
    }
}

customElements.define('card-produtos', card)