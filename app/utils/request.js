/**
 * Check response and convert to array buffer
 *
 * @param  {object} response A response from a network request
 *
 * @return {object} The array buffer from the request
 */
function convertToArrayBuffer(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.arrayBuffer();
}

function parseJson(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }

  return response.json();
}
/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}
const convertToArrayInt = data => new Uint8Array(data);
/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export function request(url, options) {
  return fetch(`http://api.identeq.online/${url}`, options)
    .then(checkStatus)
    .then(parseJson);
}

export function requestProto(url, options) {
  return fetch(`${process.env.API_BASE_URL}/${url}`, options)
    .then(checkStatus)
    .then(convertToArrayBuffer)
    .then(convertToArrayInt);
}
