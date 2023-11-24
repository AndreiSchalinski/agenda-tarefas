import { defineStore } from "pinia";

export const responsavelStore = defineStore("responsavel", {
  state: () => {
    return {
      responsavelLista: [],
      responsavel: {
        nome: "",
      },
    };
  },

  getters: {
    listaResponsal: (state) => state.responsavelLista,
  },

  actions: {
    salvarRegistroResponsavel() {
      this.responsavelLista.push({
        ...this.responsavel,
        nome: this.responsavel.nome,
      });

      this.responsavel = {};
    },
  },
});
