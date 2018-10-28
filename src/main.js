import Vue from 'vue';

import './configure';
import './noise';

import store from './store';
import App from './App.vue';

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
