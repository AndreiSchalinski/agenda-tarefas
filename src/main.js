import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { createPinia } from "pinia";

Vue.config.productionTip = false;
Vue.use(createPinia());

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
