'use strict'

const adicionar = document.getElementById('add')
    // const remover = document.getElementById('remover')

// const adicionarCard = () => {
//     const container = document.getElementById('container')
//     // container.textContent = 'Cleiton'
//     container.innerHTML += '<div class = "itens"></div>'
// }

// const removerCard = () => {
//     const container = document.getElementById('container')
//     container.innerHTML -= '<div class = "itens"></div>'
// }

const adicionarCard = (aluno, nota) => {
    const container = document.getElementById('container')
    const novaDiv = document.createElement('div')
    novaDiv.classList.add('aluno')



    if (nota < 5) {
        novaDiv.classList.add('red')
        novaDiv.innerHTML = `<h2 class= "aluno__title">${aluno}</h2>
                        <h1 class = "aluno__note">${nota}</h1>`
    } else if (nota >= 5) {
        novaDiv.classList.add('blue')
        novaDiv.innerHTML = `<h2 class= "aluno__title">${aluno}</h2>
                        <h1 class = "aluno__note">${nota}</h1>`
    }
    container.appendChild(novaDiv)

}

const handleClick = () => {
    let nomeAluno = prompt('Digite um nome para o card').trim()

    let notaAluno = prompt('Digite a nota').trim()

    if (notaAluno === '' || notaAluno < 0 || notaAluno > 10 || isNaN(notaAluno) || notaAluno == null)
        alert('ERRO: Digite apenas números de 0 a 10')
    else
        adicionarCard(nomeAluno, notaAluno)




}
adicionar.addEventListener('click', handleClick)
    // remover.addEventListener('click', removerCard)