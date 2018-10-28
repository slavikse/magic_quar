/**
 * Спрятанная ошибка под сообщение.
 * @param {string} title - Сообщение ошибки.
 * @param {object} err - Подробное описание ошибки.
 */
export default function spoiler(title, err) {
  console.groupCollapsed(`%c${title}`, 'color: #E34349;');
  console.dir(err);
  console.trace();
  console.groupEnd();
}
