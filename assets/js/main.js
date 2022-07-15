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
var tarefas = []
var numTarefas 

console.log(numTarefas)

console.log(localStorage)

if (localStorage.length > 0) {
  tarefas = (JSON.parse(localStorage.getItem('tarefas')))
}

numTarefas = tarefas.length

console.log(tarefas)
console.log(tarefasClasse)


if(tarefas.length > 0){
  for (let i = 0; i < tarefas.length; i++) {
    var tarefasAntigas = new Tarefa(
      tarefas[i].nome,
      tarefas[i].descricao,
      i,
      textoTarefaConcluida,
      divTarefasConcluidas,
      divTarefas,
      tarefas
    )

    tarefasAntigas.adicionaElemento()

  divTarefas.append(tarefasAntigas.tarefa, tarefasAntigas.divDescricaoTarefa)

  tarefasAntigas.funcionalizaBotoes()

  tarefasAntigas.botaoRemoverTarefa.addEventListener('click', () =>{
    tarefas.splice(i, 1)
    numTarefas = tarefas.length
    console.log(tarefas)
    if(tarefas.length > 0){
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
    } else {
      localStorage.clear()
    }
  })

  tarefas[i].id = i

  tarefasClasse.push(tarefasAntigas)
  }
}

function criaTarefa(nome, descricao) {

  numTarefas = tarefas.length


  var tarefa = new Tarefa(
    nome.value,
    descricao.value,
    numTarefas,
    textoTarefaConcluida,
    divTarefasConcluidas,
    divTarefas,
    tarefas
  )

  tarefa.adicionaElemento()

  divTarefas.append(tarefa.tarefa, tarefa.divDescricaoTarefa)

  tarefa.funcionalizaBotoes()

 
  let tarefaAtual = {
    nome: nome.value,
    descricao: descricao.value,
    id: numTarefas
  }

  tarefa.botaoRemoverTarefa.addEventListener('click', () =>{
    tarefas.splice(tarefa.id, 1)
    numTarefas = tarefas.length
    console.log(tarefas)
    if(tarefas.length > 0){
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
    } else {
      localStorage.clear()
    }
  })

  tarefas.push(tarefaAtual)



  tarefasClasse.push(tarefa)

  if(tarefas.length > 0){
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
    }

}

botaoAdicionaTarefa.addEventListener('click', () => {
  criaTarefa(nomeDaTarefa, descricaoDaTarefa)
  nomeDaTarefa.value = ''
  descricaoDaTarefa.value = ''
  console.log(tarefas)
  console.log(tarefasClasse)
})




