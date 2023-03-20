'use strict'

const mapa = document.querySelector('#map')


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
    const estadoClicado = await getCidades(estado)
    console.log(estadoClicado);

    const getCard = function(siglaEstado) {

            const container = document.getElementById('container__text')

            const div = document.createElement('div')
            div.classList.add('text-container')

            const sigla = document.createElement('div')
            sigla.classList.add('text-container__sigla')
            sigla.textContent = estadoClicado.uf


            div.append(sigla)
            container.replaceChildren(div)



        }
        // console.log(estadoClicado.uf);

    getCard(estadoClicado.uf)

}
mapa.addEventListener('click', getEstado)