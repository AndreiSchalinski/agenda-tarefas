const state = () => {
  return {
    listaTarefas: [],
    prioridadeTarefas: ["Low", "Medium", "High"],
    tarefa: {
      id: null,
      nome: "",
      prioridade: "",
      responsavel: "",
      descricao: "",
    },
  };
};

export default state;
