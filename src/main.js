import Vue from 'vue';
import 'aframe-physics-system';
import 'aframe-extras';
import './register';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
