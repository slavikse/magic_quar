import Vue from 'vue';
import Vuex from 'vuex';

import * as modules from './modules';

Vue.use(Vuex);

const isDevelopment = process.env.NODE_ENV === 'development';
const store = new Vuex.Store({ modules, strict: isDevelopment });

Vue.store = store;

export default store;
