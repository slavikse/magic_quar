import 'aframe';
import 'aframe-extras';
import 'aframe-physics-system';
import 'aframe-animation-component';
import Vue from 'vue';
import './RegisterComponent';
import App from './App.vue';
import store from './store';
import './noise';

Vue.config.productionTip = false;

window.ws = new WebSocket('ws://localhost:9000');

window.ws.onopen = () => {
  console.log('Соединение установлено.');

  window.ws.send(JSON.stringify({ id: window.id }));
};

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');

require('./speech');
