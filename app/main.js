let livros = []
const endpointDaAPI = "sla.json"
getbuscarLivrosDaAPI()

async function getbuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livrosComDesconto)
}