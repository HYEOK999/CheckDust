import Vue from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import axios from 'axios'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import firebase from "firebase";
Vue.prototype.$http = axios;
Vue.use(BootstrapVue);

Vue.config.productionTip = false

// var config = {
// };
// firebase.initializeApp(config);

/* eslint-disable */
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')