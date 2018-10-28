import Vue from 'vue';

const isProduction = process.env.NODE_ENV === 'production';

Vue.config.productionTip = false;
Vue.config.silent = isProduction;
