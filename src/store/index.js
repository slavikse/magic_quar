// Рекомендации:
// * В хранилище только разделяемые состояния.
//   Для всех запросов данных по сети, не имеет смысла создавать шаблонный код в хранилище.
//   Каждый раз компонент запрашивает по сети только нужные для него данные.

// Обоснование разделяемых состояний:
// * Несколько компонентов основываются на едином состоянии и могут его изменять.
// * "Машина времени" - Так как состояние изменчиво, имеет смысл проводить данные через хранилище.

// Соглашения по именованию:
// * camel_case - actions & state.
// * CAMEL_CASE - mutations. Мутации используются через actions, для контроля vue-devtools.

import Vue from 'vue';
import Vuex from 'vuex';

import * as modules from './modules';
import hooks from './hooks';

Vue.use(Vuex);

const isDevelopment = process.env.NODE_ENV === 'development';
const store = new Vuex.Store({ modules, strict: isDevelopment });

// const token = localStorage.getItem('token');
//
// if (token) {
//   store.dispatch('user/logged', token);
// }

hooks();
Vue.store = store;

export default store;
