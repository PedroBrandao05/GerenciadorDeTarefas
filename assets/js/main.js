const itensFormulario = document.querySelectorAll('.itemFormulario')
const botaoAdicionaTarefa = itensFormulario[2]
const nomeDaTarefa = itensFormulario[0]
const descricaoDaTarefa = itensFormulario[1]
const divTarefas = document.querySelector('.tarefas')
const divTarefasConcluidas = document.querySelector('.tarefasConcluidas')
const textoTarefaConcluida = document.querySelector('.textoTarefaConcluida')

import { Tarefa } from './Tarefa.js'

function criaTarefa(nome, descricao) {
  const novaTarefa = document.createElement('li')
  novaTarefa.innerHTML = nome.value
  novaTarefa.classList.add('itemTarefa')
  const textoDescricao = document.createElement('p')
  textoDescricao.innerHTML = descricao.value
  textoDescricao.classList.add('texto__descricaoDaTarefa')

  const novaDivBotoes = document.createElement('div')
  novaDivBotoes.classList.add('botoes')

  const novoBotaoAbrirDescricao = document.createElement('button')
  novoBotaoAbrirDescricao.classList.add('abrirDescricao')

  const novoBotaoTarefaConcluida = document.createElement('button')
  novoBotaoTarefaConcluida.classList.add('tarefaConcluida')

  const novoBotaoRemoverTarefa = document.createElement('button')
  novoBotaoRemoverTarefa.classList.add('removerTarefa')

  const novaDivDescricaoDaTarefa = document.createElement('div')
  novaDivDescricaoDaTarefa.classList.add('descricaoDaTarefa')

  novaDivBotoes.append(
    novoBotaoAbrirDescricao,
    novoBotaoTarefaConcluida,
    novoBotaoRemoverTarefa
  )

  novaDivDescricaoDaTarefa.appendChild(textoDescricao)
  novaTarefa.appendChild(novaDivBotoes)
  divTarefas.append(novaTarefa, novaDivDescricaoDaTarefa)

  localStorage.setItem('tarefas', divTarefas)

  console.log(divTarefas)

  var tarefa = new Tarefa(
    nome.value,
    novaTarefa,
    textoDescricao,
    novoBotaoAbrirDescricao,
    novoBotaoTarefaConcluida,
    novoBotaoRemoverTarefa,
    novaDivDescricaoDaTarefa
  )

  tarefa.botaoAbrirDescricao.addEventListener('click', () => {
    tarefa.abrirDescricao()
  })

  tarefa.botaoRemoverTarefa.addEventListener('click', () => {
    tarefa.deletarTarefa()
    if (tarefa.tarefa.classList.contains('concluida')) {
      textoTarefaConcluida.classList.remove('off')
    }
  })

  tarefa.botaoTarefaConcluida.addEventListener('click', () => {
    if (tarefa.botaoTarefaConcluida.classList.contains('ativo')) {
      tarefa.retomarTarefa()
      divTarefas.append(tarefa.tarefa, tarefa.divDescricaoTarefa)
      textoTarefaConcluida.classList.remove('off')
    } else {
      tarefa.concluirTarefa()
      divTarefasConcluidas.append(tarefa.tarefa, tarefa.divDescricaoTarefa)
      textoTarefaConcluida.classList.add('off')
    }
  })

  console.log(tarefa)

  var tarefas = []

  tarefas.push(tarefa)

  console.log(tarefas)
}

botaoAdicionaTarefa.addEventListener('click', () => {
  criaTarefa(nomeDaTarefa, descricaoDaTarefa)
})
