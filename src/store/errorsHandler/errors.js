// import Vue from 'vue';

export function unauthorized() {
  console.info('Действие не разрешено!');
  // Vue.store.dispatch('user/logout');
}

export function forbidden() {
  console.info('Доступ запрещён!');
}

export function notFound() {
  console.info('Информация не найдена!');
}

export function methodNotAllowed() {
  console.info('Метод запрещён!');
}

export function unprocessableEntity() {
  console.error('Произошла ошибка!');
}

export function internalServer() {
  console.error('Внутренняя ошибка сервера!');
}

export function unknown() {
  console.error('Неизвестная ошибка!');
}
