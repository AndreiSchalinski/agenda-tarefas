<!-- eslint-disable vue/no-mutating-props -->
<template>
  <v-dialog v-model="expandFormTarefa" persistent max-width="600px">
    <v-card class="pa-10 mb-8" elevation="4">
      <v-row class="d-flex justify-end">
        <v-btn
          class="mx-2"
          fab
          dark
          small
          color="error"
          @click="fecharFormTarefa()"
        >
          <v-icon dark> mdi-window-close </v-icon>
        </v-btn>
      </v-row>
      <v-card-title class="pl-0">Nova Tarefa</v-card-title>
      <form>
        <v-row>
          <v-col
            ><v-text-field
              v-model="tarefa.nome"
              label="Tarefa"
              clearable
            ></v-text-field
          ></v-col>
        </v-row>
        <v-row>
          <v-col
            ><v-select
              v-model="tarefa.prioridade"
              :items="prioridadeTarefas"
              label="Prioridade"
              clearable
            ></v-select
          ></v-col>
        </v-row>
        <v-row>
          <v-col
            ><v-select
              v-model="tarefa.responsavel"
              :items="listaResponsal"
              item-text="nome"
              label="Responsável"
              no-data-text="Sem responsáveis cadastrados!"
              clearable
            ></v-select
          ></v-col>
        </v-row>
        <v-row>
          <v-col
            ><v-textarea
              v-model="tarefa.descricao"
              label="Descrição"
              clearable
            ></v-textarea
          ></v-col>
        </v-row>
        <v-row>
          <v-btn
            class="mr-2"
            variant="tonal"
            color="success"
            @click="cadastraNovaTarefa()"
          >
            <v-icon right dark class="mr-2"> mdi-bullseye-arrow </v-icon>
            SALVAR
          </v-btn>
        </v-row>
      </form></v-card
    >
  </v-dialog>
</template>
<script>
import { storeToRefs } from "pinia";
import { tarefasStore } from "../store/tarefas/index";
import { dashboardStore } from "../store/dashboard";
import { responsavelStore } from "../store/responsavel";
export default {
  props: {
    expandFormTarefa: Boolean,
  },

  setup() {
    const storeTarefa = tarefasStore();

    const storeResponsavel = responsavelStore();

    const storeDashboard = dashboardStore();

    const { prioridadeTarefas, tarefa, cadastraNovaTarefa, listaTarefas } =
      storeToRefs(storeTarefa);

    const { listaResponsal } = storeToRefs(storeResponsavel);

    const { fecharFormTarefa } = storeToRefs(storeDashboard);

    return {
      tarefa,
      listaTarefas,
      listaResponsal,
      fecharFormTarefa,
      prioridadeTarefas,
      cadastraNovaTarefa,
    };
  },
};
</script>
<style scoped>
.v-application .mb-8 {
  margin-bottom: 0 !important;
}
</style>