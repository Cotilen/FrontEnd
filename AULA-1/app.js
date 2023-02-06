'use strict'

const calcular = document.getElementById('calcular')

function somar() {

    const numero1 = Number(document.getElementById('numero1').value)
    const numero2 = Number(document.getElementById('numero2').value)
    const resultado = document.getElementById('resultado')
    const formulario = document.getElementById('form')


    resultado.value = numero1 + numero2
    formulario.classList.add('cyan')
}

calcular.addEventListener('click', somar)