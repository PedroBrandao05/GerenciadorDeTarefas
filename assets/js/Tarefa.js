export class Tarefa {
  constructor(
    nome,
    tarefa,
    descricao,
    botaoAbrirDescricao,
    botaoTarefaConcluida,
    botaoRemoverTarefa,
    divDescricaoTarefa
  ) {
    this.nome = nome
    this.tarefa = tarefa
    this.descricao = descricao
    this.botaoAbrirDescricao = botaoAbrirDescricao
    this.botaoTarefaConcluida = botaoTarefaConcluida
    this.botaoRemoverTarefa = botaoRemoverTarefa
    this.divDescricaoTarefa = divDescricaoTarefa
  }

  abrirDescricao() {
    this.divDescricaoTarefa.classList.toggle('on')
  }

  deletarTarefa() {
    if (
      window.confirm('Tem certeza que deseja remover esta tarefa?') === true
    ) {
      this.tarefa.remove()
    }
  }

  concluirTarefa() {
    if (
      window.confirm('Tem certeza que deseja concluir esta tarefa?') === true
    ) {
      this.tarefa.remove()
      this.divDescricaoTarefa.remove()
      this.tarefa.classList.add('concluida')
      this.divDescricaoTarefa.classList.add('concluida')
      this.descricao.classList.add('concluida')
      this.botaoTarefaConcluida.classList.add('ativo')
    }
  }

  retomarTarefa() {
    if (
      window.confirm('Tem certeza que deseja retomar essa tarefa?') === true
    ) {
      this.tarefa.remove()
      this.divDescricaoTarefa.remove()
      this.tarefa.classList.remove('concluida')
      this.divDescricaoTarefa.classList.remove('concluida')
      this.descricao.classList.remove('concluida')
      this.botaoTarefaConcluida.classList.remove('ativo')
    }
  }
}
