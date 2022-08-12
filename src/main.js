import { createApp } from "vue";
// import Vue from "vue"
import App from "./App.vue";
import BootstrapVue from 'bootstrap-vue';
import router from "./router";

import "./assets/main.css";
import "../src/design/app.scss";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


const app = createApp(App);

app.use(router);
app.use(BootstrapVue);
// Vue.use(BootstrapVue);

app.mount("#app");
