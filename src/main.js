import 'aframe';
// import 'three.ar.js';
// import 'aframe-ar';
import 'aframe-extras';
import 'aframe-physics-system';
import 'aframe-animation-component';
// import './register';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
