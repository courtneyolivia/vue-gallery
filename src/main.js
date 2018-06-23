// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import Home from "./views/Home";
import Pets from "./views/Pets";

Vue.use(Vuetify);

const router = new VueRouter({ routes });

const routes = [
  { path: "/", component: Home },
  { path: "/pets", component: Pets }
];

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
  router
});
