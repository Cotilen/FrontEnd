'use strict'

const mapa = document.querySelector('#map')
var lista = []
var arrayCidades = []


const getEstado = async function({ target }) {

    const estado = target.id.replace('BR-', '')

    const getCidades = async function(sigla) {

        let url = `http://localhost:8080/v1/senai/cidades?uf=${sigla}`

        let response = await fetch(url)
        let data = await response.json()

        return {
            uf: data.uf,
            descricao: data.descricao,
            cidades: data.cidades
        }

    }

    const getRegiao = async function(sigla) {

        let url = `http://localhost:8080/v1/senai/estado/sigla/${sigla}`

        let response = await fetch(url)
        let data = await response.json()

        return {
            regiao: data.regiao
        }

    }


    const estadoClicado = await getCidades(estado)
    const regiaoClicado = await getRegiao(estado)


    // console.log(regiaoClicado);
    // console.log(estadoClicado);

    const getCard = function(siglaEstado) {


        const container = document.getElementById('container__text')

        const card = document.createElement('div')
        card.classList.add('text-container')

        const estado = document.createElement('div')
        estado.classList.add('text-container-estado')

        const sigla = document.createElement('div')
        sigla.classList.add('text-container__sigla')
        sigla.textContent = estadoClicado.uf

        const descricao = document.createElement('div')
        descricao.classList.add('text-container__descricao')

        const capital = document.createElement('div')
        capital.classList.add('text-container__descricao__capital')
        capital.textContent = 'Capital: ' + estadoClicado.descricao

        const regiao = document.createElement('div')
        regiao.classList.add('text-container__descricao__regiao')
        regiao.textContent = 'Região: ' + regiaoClicado.regiao

        const seila = document.createElement('div')
        seila.classList.add('nem_sei')

        const cidadeText = document.createElement('div')
        cidadeText.classList.add('text-cidade')
        cidadeText.textContent = 'Cidades: '

        lista.splice([0])
        lista.push(estadoClicado.cidades)


        const listaCidades = document.createElement('div')
        listaCidades.classList.add('text-container__cidades')


        lista[0].forEach(cidades => {

            const cidadesMapa = document.createElement('p')
            cidadesMapa.textContent = cidades

            listaCidades.append(cidadesMapa)

        });

        // console.log(lista);


        seila.append(listaCidades)
        descricao.append(capital, regiao)
        estado.append(sigla, descricao)
        card.append(estado, cidadeText, seila)

        container.replaceChildren(card)
    }
    getCard(estadoClicado.uf)

}
mapa.addEventListener('click', getEstado)