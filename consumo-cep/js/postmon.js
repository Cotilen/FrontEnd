export const pesquisarCep = async function(cep) {

    let url = `https://api.postmon.com.br/v1/cep/${cep}`

    let response = await fetch(url)
    let data = await response.json()

    return {
        logradouro: data.logradouro,
        bairro: data.bairro,
        municipio: data.cidade,
        estado: data.estado,
        ...data
    }

}