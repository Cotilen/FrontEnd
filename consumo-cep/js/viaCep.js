export const pesquisarCep = async function(cep) {
    const url = `http://viacep.com.br/ws/${cep}/json/`

    const response = await fetch(url)
    const data = await response.json()

    return {
        municipio: data.localidade,
        estado: data.uf,
        bairro: data.bairro,
        logradouro: data.logradouro
    }
}


// export const cep = {
//     "cep": "69909-024",
//     "logradouro": "Rua Acre",
//     "complemento": "",
//     "bairro": "Rosa Linda",
//     "municipio": "Rio Branco",
//     "estado": "AC"
//     }