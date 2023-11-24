import actions from "./actions";
import getters from "./getters";
import state from "./state";
import { defineStore } from "pinia";

export const tarefasStore = defineStore("tarefasStore", {
  state,
  getters,
  actions,
});
