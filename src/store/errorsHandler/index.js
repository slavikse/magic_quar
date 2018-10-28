import {
  unauthorized,
  forbidden,
  notFound,
  methodNotAllowed,
  unprocessableEntity,
  internalServer,
  unknown,
} from './errors';

export default function errorsHandler({ status }) {
  switch (status) {
    case 401:
      unauthorized();
      break;

    case 403:
      forbidden();
      break;

    case 404:
      notFound();
      break;

    case 405:
      methodNotAllowed();
      break;

    case 422:
      unprocessableEntity();
      break;

    case 500:
      internalServer();
      break;

    default:
      unknown();
  }
}
