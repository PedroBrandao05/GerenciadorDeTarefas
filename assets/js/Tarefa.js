export class Tarefa {
  constructor(
    nome,
    descricao,
    id,
    textoTarefaConcluida,
    divTarefasConcluidas,
    divTarefas
  ) {
    this.divTarefasConcluidas = divTarefasConcluidas
    this.divTarefas = divTarefas
    this.nome = nome
    this.validade = true
    this.tarefa = document.createElement('li')
    this.descricao = document.createElement('p')
    this.botaoAbrirDescricao = document.createElement('button')
    this.divBotoes = document.createElement('div')
    this.botaoTarefaConcluida = document.createElement('button')
    this.botaoRemoverTarefa = document.createElement('button')
    this.divDescricaoTarefa = document.createElement('div')
    this.id = id

    this.tarefa.innerHTML = nome
    this.tarefa.classList.add('itemTarefa')
    this.descricao.innerHTML = descricao
    this.descricao.classList.add('texto__descricaoDaTarefa')
    this.divBotoes.classList.add('botoes')
    this.botaoAbrirDescricao.classList.add('abrirDescricao')
    this.botaoTarefaConcluida.classList.add('tarefaConcluida')
    this.botaoRemoverTarefa.classList.add('removerTarefa')
    this.divDescricaoTarefa.classList.add('descricaoDaTarefa')
    this.textoTarefaConcluida = textoTarefaConcluida
  }

  // Método para adicionar os elementos na página

  adicionaElemento() {
    this.divBotoes.append(
      this.botaoAbrirDescricao,
      this.botaoTarefaConcluida,
      this.botaoRemoverTarefa
    )

    this.divDescricaoTarefa.appendChild(this.descricao)
    this.tarefa.appendChild(this.divBotoes)
  }

  // Método para abrir a descrição da tarefa

  abrirDescricao() {
    this.divDescricaoTarefa.classList.toggle('on')
  }

  //Método para apagar uma tarefa

  deletarTarefa() {

      this.tarefa.remove()
      this.validade = false
      if (this.tarefa.classList.contains('concluida')) {
        this.textoTarefaConcluida.classList.remove('off')
      }
  }

  //Método para concluir a tarefa

  concluirTarefa() {
    this.tarefa.remove()
    this.divDescricaoTarefa.remove()
    this.tarefa.classList.add('concluida')
    this.divDescricaoTarefa.classList.add('concluida')
    this.descricao.classList.add('concluida')
    this.botaoTarefaConcluida.classList.add('ativo')
    this.divTarefasConcluidas.append(this.tarefa, this.divDescricaoTarefa)
    this.textoTarefaConcluida.classList.add('off')
  }

  //Método para retormar a tarefa

  retomarTarefa() {
    this.tarefa.remove()
    this.divDescricaoTarefa.remove()
    this.tarefa.classList.remove('concluida')
    this.divDescricaoTarefa.classList.remove('concluida')
    this.descricao.classList.remove('concluida')
    this.botaoTarefaConcluida.classList.remove('ativo')
    this.divTarefas.append(this.tarefa, this.divDescricaoTarefa)
    this.textoTarefaConcluida.classList.remove('off')
  }

  // Método que dá função para os botões da tarefa

  funcionalizaBotoes() {
    this.botaoAbrirDescricao.addEventListener('click', () => {
      this.abrirDescricao()
    })

    this.botaoRemoverTarefa.addEventListener('click', () => {
      this.deletarTarefa()
    })

    this.botaoTarefaConcluida.addEventListener('click', () => {
      if (this.botaoTarefaConcluida.classList.contains('ativo')) {
        this.retomarTarefa()
      } else {
        this.concluirTarefa()
      }
    })
  }
}
