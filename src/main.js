import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// variables globales
Vue.prototype.axios = axios; // sin usar vue-axios
window.$ = window.jQuery = require("jquery");

// import VueSweetalert2 from 'vue-sweetalert2'

// If you don't need the styles, do not connect
// import 'sweetalert2/dist/sweetalert2.min.css'

// estara disponible de manera global
// Vue.use(VueSweetalert2);

// vue
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
