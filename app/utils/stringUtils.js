import RequestHeaders from '../constants/RequestHeaders';

export function setAuthorization(token) {
  return RequestHeaders.setToken(token);
}
