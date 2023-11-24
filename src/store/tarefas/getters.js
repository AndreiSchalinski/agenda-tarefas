const getters = {
  listaTarefasCadastradas: (state) => state.listaTarefas,
  totalTarefasCadastradas: (state) => state.listaTarefas.length,
};

export default { ...getters };
