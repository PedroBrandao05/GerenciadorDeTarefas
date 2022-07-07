const navLateral = document.querySelector('.lateral-nav')
const botaoAbrir = document.querySelector('.abrir__nav-lateral')
const botaoFechar = document.querySelector('.fechar__nav')
const botaoAdicionarTarefa = document.querySelector('.adicionarTarefa')
const formulario = document.querySelector('.formulario')
const botaoAbrirDescricao = document.querySelectorAll('.abrirDescricao')
const descricaoItem = document.querySelectorAll('.descricaoDaTarefa')

botaoAbrir.addEventListener('click', () => {
  abrirNavegacao()
})

botaoFechar.addEventListener('click', () => {
  fecharNavegacao()
})

botaoAdicionarTarefa.addEventListener('click', () => {
  abrirFormulario()
})

function abrirNavegacao() {
  navLateral.classList.add('on')
}

function fecharNavegacao() {
  navLateral.classList.remove('on')
}

function abrirFormulario() {
  formulario.classList.toggle('on')
}

// Recebe como parâmetro o contador dos botões



