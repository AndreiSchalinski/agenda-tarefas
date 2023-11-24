const actions = {
  cadastraNovaTarefa() {
    this.listaTarefas.push(this.tarefa);
    this.tarefa = {};
  },

  concluirTarefa(index) {
    this.listaTarefas.splice(index, 1);
  },
};

export default { ...actions };
