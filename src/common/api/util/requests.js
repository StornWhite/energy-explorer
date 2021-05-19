import _ from 'lodash';

// import { QueryParams } from 'navigader/types';
// import { appendQueryString, getRequestHeaders } from '../../util';
import { getRequestHeaders } from '../../util';

/** ============================ API Methods =============================== */
/**
 * Makes a request using the fetch API
 *
 * @param {HttpMethodType} method: the HTTP method to use for the request (e.g. GET, POST, etc)
 * @param {string} route: the LOCAL route to send the request to. I.e. this should begin with a "/"
 * @param {object} body: the body of the request. Typically this will be JSON.
 */
 function makeJsonRequest(method, route, body) {
    return fetch(route, {
      body,
      headers: getRequestHeaders('application/json'),
      method,
    });
  }
  
/**
 * Emulates a form submission using the fetch API
 *
 * @param {string} route: the route to send the request to
 * @param {object} formFields: an object mapping form data fields to their values
 */
export function makeFormPost(route, formFields) {
return fetch(route, {
    body: objToFormData(formFields),
    headers: getRequestHeaders(),
    method: 'POST',
});
}

export function postRequest(route, body) {
if (containsFile(body)) {
    return makeFormPost(route, body);
} else {
    return makeJsonRequest('POST', route, JSON.stringify(body));
}
}

/** ============================ Helpers =============================== */  
/**
 * Given an object, creates a FormData object with the object's keys and corresponding values as
 * fields
 *
 * @param {object} formFields: the object to convert to a FormData object
 */
 function objToFormData(formFields) {
  const formData = new FormData();
  Object.entries(formFields).forEach(([fieldName, value]) => {
    formData.append(fieldName, value);
  });
  return formData;
}

/**
 * Returns `true` if any value of the `params` object is a `File` instance. This is for use with
 * POST requests.
 *
 * @param {object} params: the body of the POST request
 */
function containsFile(params) {
return _.some(params, (field) => field instanceof File);
}
