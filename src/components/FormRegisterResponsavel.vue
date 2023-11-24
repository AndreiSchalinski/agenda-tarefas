<!-- eslint-disable vue/no-mutating-props -->
<template>
  <v-row justify="center">
    <v-dialog v-model="expandFormResponsavel" persistent width="600px">
      <v-card class="pa-10" elevation="4">
        <v-row class="d-flex justify-end">
          <v-btn
            class="mx-2"
            fab
            dark
            small
            color="error"
            @click="fecharFormResponsavel()"
          >
            <v-icon dark> mdi-window-close </v-icon>
          </v-btn>
        </v-row>
        <v-card-title class="pl-0">Novo Responsável</v-card-title>
        <form>
          <v-row>
            <v-col
              ><v-text-field
                clearable
                v-model="responsavel.nome"
                label="Nome Completo"
              ></v-text-field
            ></v-col>
          </v-row>
          <v-row>
            <v-btn
              variant="tonal"
              color="success"
              class="mr-2"
              @click="salvarRegistroResponsavel()"
            >
              <v-icon right dark class="mr-2"> mdi-bullseye-arrow </v-icon>
              SALVAR
            </v-btn>
          </v-row>
        </form></v-card
      >
    </v-dialog>
  </v-row>
</template>
  <script>
import { storeToRefs } from "pinia";
import { dashboardStore } from "../store/dashboard";
import { responsavelStore } from "../store/responsavel";
export default {
  props: {
    expandFormResponsavel: Boolean,
  },

  setup() {
    const storeResponsavel = responsavelStore();
    const storeDashboard = dashboardStore();

    const { responsavel, listaResponsal, salvarRegistroResponsavel } =
      storeToRefs(storeResponsavel);

    const { fecharFormResponsavel } = storeToRefs(storeDashboard);

    return {
      responsavel,
      listaResponsal,
      fecharFormResponsavel,
      salvarRegistroResponsavel,
    };
  },
};
</script>
