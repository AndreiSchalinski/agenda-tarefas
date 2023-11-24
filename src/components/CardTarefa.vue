<template>
  <v-card class="pa-2 pb-0 mb-10" elevation="4">
    <v-card-title class="pl-0 pt-0">{{ tarefa.nome }}</v-card-title>
    <v-card-subtitle class="pa-0"
      ><strong>Prioridade: </strong> {{ tarefa.prioridade }}</v-card-subtitle
    >
    <v-card-subtitle class="pa-0"
      ><strong>Responsável: </strong>{{ tarefa.responsavel }}</v-card-subtitle
    >
    <v-card-text class="pl-0 pt-0">
      <strong>Descrição: </strong> {{ tarefa.descricao }}</v-card-text
    >
    <v-row>
      <v-col
        ><v-btn
          block
          variant="tonal"
          color="success"
          @click="concluirTarefa(index)"
        >
          <v-icon right dark class="mr-2"> mdi-check </v-icon>
          Finalizar
        </v-btn></v-col
      >
    </v-row>
  </v-card>
</template>

<script>
import { storeToRefs } from "pinia";
import { tarefasStore } from "../store/tarefas/index";
export default {
  props: {
    tarefa: Object,
    index: Number,
  },

  setup() {
    const store = tarefasStore();

    const { concluirTarefa } = storeToRefs(store);

    return { concluirTarefa };
  },
};
</script>

<style>
</style>