import { cookieManager } from '../util';
import { apiRoute, postRequest } from './util';

/** ============================ API Methods =============================== */
export async function login(email, password) {
  const response = await postRequest(routes.login, { email, password });
  const json = await response.json();

  if (response.status === 200) {
    // Store the token
    cookieManager.authToken = json.key;
  }

  return {
    response,
    error: (json.non_field_errors || [])[0],
  };
}

/** ============================ Helpers =================================== */
const routes = {
  login: apiRoute.restAuth('login/'),
};
