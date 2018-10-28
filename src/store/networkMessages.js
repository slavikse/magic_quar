const constants = {
  req: 'color: #C4D030',
  res: 'color: #40C04F',
  method: 'color: #808080',
  address: 'color: #6C7DE0',
};

/**
 * Форматированный и стилизованный вывод сетевых сообщений в консоль.
 * @param type {string}: res|req, запрос или ответ.
 * @param data {object} Данные ответа сервера.
 * ex: styled({ type: 'res', data: res });
 */
export default function networkMessages({ type, data }) {
  const typeFormatted = type.toUpperCase();

  // data.config - сетевой запрос.
  // data без config - сетевой ответ.
  const { method, url } = data.config ? data.config : data;

  // Запрос к api, без uri сервера и версии.
  const uriMatched = url.match(/\/v\d(.+)/);
  let address = url;

  if (uriMatched) {
    [, address] = uriMatched;
  }

  const message = `%c${typeFormatted}: %c${method.toUpperCase()} %c${address}`;

  // Индекс соответствует %c в строке message.
  const stylesheets = [
    constants[type],
    constants.method,
    constants.address,
  ];

  console.groupCollapsed(message, ...stylesheets);
  console.log(JSON.stringify(data, undefined, 2));
  console.groupEnd();
}
