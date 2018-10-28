import Vue from 'vue';

// const isProduction = process.env.NODE_ENV === 'production';

function errorHandler(err, vm, info) {
  console.group('Unhandled Error!');

  console.groupCollapsed('err');
  console.dir(err);
  console.groupEnd();

  console.groupCollapsed('vm');
  console.dir(vm);
  console.groupEnd();

  console.groupCollapsed('info');
  console.dir(info);
  console.groupEnd();

  console.groupCollapsed('trace');
  console.trace();
  console.groupEnd();

  console.groupEnd();

  // Можно отправлять ошибку на сервер для выяснения причины.
  // if (isProduction) {}
}

Vue.config.errorHandler = errorHandler;
