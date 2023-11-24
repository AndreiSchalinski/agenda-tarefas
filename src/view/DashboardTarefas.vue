<template>
  <v-app id="inspire">
    <v-app-bar app color="#191970">
      <v-app-bar-title style="color: white"
        ><strong>Dashboard</strong></v-app-bar-title
      >

      <v-spacer></v-spacer>
      <v-btn outlined class="mr-2" color="white" type="error" elevation="0">
        TOTAL TAREFAS: {{ totalTarefasCadastradas }}
      </v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on" width="230">
            <v-icon right dark class="mr-2"> mdi-tune </v-icon> CADASTROS
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in dropdownsList" :key="index">
            <v-list-item-title
              ><v-btn
                width="200"
                color="success"
                @click="
                  index === 0 ? cadastraNovoResponsavel() : cadastraNovaTarefa()
                "
                ><v-icon class="mr-2">{{ item.icon }}</v-icon
                >{{ item.title }}</v-btn
              ></v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main style="background-color: #9370db">
      <v-container>
        <FormRegisterTarefas :expand-form-tarefa="isExpandFormTarefa" />
        <FormRegisterResponsavel
          :expand-form-responsavel="isExpandFormResponsavel"
        />
      </v-container>
      <v-container>
        <ListaTarefas v-if="totalTarefasCadastradas !== 0" />
        <AlertMesage v-else />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import { storeToRefs } from "pinia";
import { dashboardStore } from "../store/dashboard";
import { tarefasStore } from "../store/tarefas/index";
import ListaTarefas from "@/components/ListaTarefas.vue";
import AlertMesage from "@/components/AlertMesage.vue";
import FormRegisterTarefas from "../components/FormRegisterTarefas.vue";
import FormRegisterResponsavel from "../components/FormRegisterResponsavel.vue";

export default {
  components: {
    AlertMesage,
    ListaTarefas,
    FormRegisterTarefas,
    FormRegisterResponsavel,
  },

  setup() {
    const storeDashboard = dashboardStore();
    const storeTarefas = tarefasStore();

    const {
      dropdownsList,
      cadastraNovaTarefa,
      isExpandFormTarefa,
      cadastraNovoResponsavel,
      isExpandFormResponsavel,
    } = storeToRefs(storeDashboard);

    const { totalTarefasCadastradas } = storeToRefs(storeTarefas);

    return {
      dropdownsList,
      cadastraNovaTarefa,
      isExpandFormTarefa,
      cadastraNovoResponsavel,
      isExpandFormResponsavel,
      totalTarefasCadastradas,
    };
  },
};
</script>
