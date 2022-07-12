import { Tarefa } from './Tarefa.js'

// Itens do formulário preenchido para criar a tarefa

const itensFormulario = document.querySelectorAll('.itemFormulario')
const botaoAdicionaTarefa = itensFormulario[2]
const nomeDaTarefa = itensFormulario[0]
const descricaoDaTarefa = itensFormulario[1]

// Itens visuais da tarefa

const divTarefas = document.querySelector('.tarefas')
const divTarefasConcluidas = document.querySelector('.tarefasConcluidas')
const textoTarefaConcluida = document.querySelector('.textoTarefaConcluida')

// Arrays que guardam, respectivamente, as classes das tarefas criadas, e os valores de nome e descrição destas

const tarefasClasse = []
const tarefasLocalStorage = []

console.log(tarefasLocalStorage)
console.log(tarefasClasse)
console.log(localStorage)

if(localStorage.length > 1){
  for(let i = 0; i < localStorage.length - 1; i++){
    tarefasLocalStorage.push(JSON.parse(localStorage.getItem('tarefa' + i)))
  }
}



for(let i = 0; i < tarefasLocalStorage.length; i++){
   if(JSON.stringify(tarefasLocalStorage[i]) === 'null'){
    tarefasLocalStorage.splice(i, 1)
   }
}

localStorage.clear()

var numTarefas = tarefasLocalStorage.length
localStorage.setItem('numero de tarefas', numTarefas)


console.log(tarefasLocalStorage)

if (tarefasLocalStorage.length > 0) {
  for (let i = 0; i < tarefasLocalStorage.length; i++) {
    var tarefaAntiga = new Tarefa(
      i,
      tarefasLocalStorage[i].nome,
      tarefasLocalStorage[i].descricao,
      textoTarefaConcluida,
      divTarefasConcluidas,
      divTarefas,
      tarefasLocalStorage
    )

    tarefasClasse.push(tarefaAntiga)

    tarefaAntiga.funcionalizaBotoes()

    tarefaAntiga.adicionaElemento()

    divTarefas.append(tarefaAntiga.tarefa, tarefaAntiga.divDescricaoTarefa)

    localStorage.setItem(
      'tarefa' + i,
      JSON.stringify(tarefasLocalStorage[i])
    )
  }
}

function criaTarefa(nome, descricao) {
  var tarefaAtual = {
    nome: nome.value,
    descricao: descricao.value
  }

  tarefasLocalStorage.push(tarefaAtual)

  var tarefa = new Tarefa(
    numTarefas,
    nome.value,
    descricao.value,
    textoTarefaConcluida,
    divTarefasConcluidas,
    divTarefas,
    tarefasLocalStorage
  )

  tarefa.adicionaElemento()

  divTarefas.append(tarefa.tarefa, tarefa.divDescricaoTarefa)

  tarefa.funcionalizaBotoes()

  localStorage.setItem(
    'tarefa' + numTarefas,
    JSON.stringify(tarefasLocalStorage[numTarefas])
  )

  tarefasClasse.push(tarefa)

  numTarefas = tarefasLocalStorage.length

  localStorage.setItem('numero de tarefas', numTarefas)

  
}

botaoAdicionaTarefa.addEventListener('click', () => {
  criaTarefa(nomeDaTarefa, descricaoDaTarefa)
  nomeDaTarefa.value = ''
  descricaoDaTarefa.value = ''
  console.log(numTarefas)
  console.log(tarefasLocalStorage)
  console.log(tarefasClasse)
  console.log(localStorage)
})
