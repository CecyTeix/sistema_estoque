const formulario = document.querySelector('#formulario')
const nome = document.querySelector('#nome')
const marca = document.querySelector('#marca')
const peso = document.querySelector('#peso')
const preco = document.querySelector('#preco')
const qtde_estoque = document.querySelector('#qtde_estoque')
const container = document.querySelector('#container')
const card = document.querySelector('#card')

formulario.addEventListener('submit', (event) => {
    event.preventDefault() //Impede que a página atualize
    const novoCard = document.createElement("div")
    novoCard.className ="card"

    const novoNome = document.createElement("h2")
    novoNome.textContent = nome.value

    const novaMarca = document.createElement("p")
    novaMarca.textContent = `Marca: ${marca.value}`

    const novoPeso = document.createElement("p")
    novoPeso.textContent = `Peso/Volume: ${Number(peso.value)}`

    const novoPreco = document.createElement("p")
    novoPreco.textContent = `Preço R$: ${Number(preco.value).toFixed(2)}`

    const novaQtd = document.createElement("p")
    novaQtd.textContent = `Quantidade em Estoque: ${qtde_estoque.value}`

    const botaoExcluir = document.createElement("button")
    botaoExcluir.textContent = "Excluir"

    botaoExcluir.addEventListener('click', () => {
        novoCard.remove()
    })

    novoCard.append(novoNome, novaMarca, novoPreco, novaQtd, botaoExcluir)
    container.append(novoCard)
    
    formulario.reset()
    nome.focus()
})
