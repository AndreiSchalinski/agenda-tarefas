import { defineStore } from "pinia";

export const dashboardStore = defineStore("dashboard", {
  state: () => {
    return {
      dropdownsList: [
        {
          icon: "mdi-account-plus",
          title: "Responsável",
        },
        {
          icon: "mdi-bullseye-arrow",
          title: "Nova Tarefa",
        },
      ],
      showFormTarefa: false,
      showFormResponsavel: false,
    };
  },

  getters: {
    isExpandFormTarefa: (state) => state.showFormTarefa,
    isExpandFormResponsavel: (state) => state.showFormResponsavel,
  },

  actions: {
    cadastraNovaTarefa() {
      this.showFormResponsavel = false;
      this.showFormTarefa = !this.showFormTarefa;
    },

    cadastraNovoResponsavel() {
      this.showFormTarefa = false;
      this.showFormResponsavel = !this.showFormResponsavel;
    },

    fecharFormTarefa() {
      this.showFormTarefa = false;
    },

    fecharFormResponsavel() {
      this.showFormResponsavel = false;
    },
  },
});
