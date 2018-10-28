import Vue from 'vue';
import errorsHandler from './errorsHandler';
import networkMessages from './networkMessages';

const isDevelopment = process.env.NODE_ENV === 'development';

function responseError(err) {
  if (err.response) {
    errorsHandler(err.response);
  } else {
    errorsHandler({ status: 500 });
  }

  return Promise.reject(err);
}

function responseSuccess(res) {
  if (isDevelopment) {
    networkMessages({ type: 'res', data: res });
  }

  return res;
}

function requestError(err) {
  return Promise.reject(err);
}

function requestSuccess(req) {
  if (isDevelopment) {
    networkMessages({ type: 'req', data: req });
  }

  return req;
}

function axiosSetup() {
  Vue.axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

  Vue.axios.interceptors.request.use(requestSuccess, requestError);
  Vue.axios.interceptors.response.use(responseSuccess, responseError);
}

export default function hooks() {
  axiosSetup();
}
