<template>
  <v-row>
    <v-col v-for="(tarefa, i) in listaTarefasCadastradas" :key="i" cols="4">
      <CardTarefa :tarefa="tarefa" :index="i" />
    </v-col>
  </v-row>
</template>

<script>
import CardTarefa from "./CardTarefa.vue";
import { tarefasStore } from "../store/tarefas/index";
import { storeToRefs } from "pinia";
export default {
  components: {
    CardTarefa,
  },

  setup() {
    const store = tarefasStore();

    const { listaTarefasCadastradas } = storeToRefs(store);

    return { listaTarefasCadastradas };
  },
};
</script>

<style>
</style>