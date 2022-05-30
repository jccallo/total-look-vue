import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "@/components/layouts/NavBar.vue";

// variables globales
Vue.prototype.axios = axios; // sin usar vue-axios
window.$ = window.jQuery = require("jquery"); // jquery pero solo funciona window.jquery

// persistencia de token
let token = localStorage.getItem("token");
if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

// componentes globales
Vue.component('NavBar', NavBar)

// import VueSweetalert2 from 'vue-sweetalert2'

// If you don't need the styles, do not connect
// import 'sweetalert2/dist/sweetalert2.min.css'

// estara disponible de manera global
// Vue.use(VueSweetalert2);

// default
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
