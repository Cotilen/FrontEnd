'use strict'

const calcular = document.getElementById('calcular')

function somar() {

    const nota1 = Number(document.getElementById('nota1').value)
    const nota2 = Number(document.getElementById('nota2').value)
    const situacao = document.getElementById('situacao')
    const formulario = document.getElementById('form')
    const media = (nota1 + nota2) / 2
    const body = document.getElementById('body')



    console.log(media)
    if (media >= 5) {
        body.classList.remove('vermelho')
        body.classList.add('verde')
        situacao.value = 'Aprovado'

    } else {
        situacao.value = 'Reprovado'
        body.classList.add('vermelho')
    }
}

calcular.addEventListener('click', somar)