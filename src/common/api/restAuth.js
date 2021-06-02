import { cookieManager } from '../util';
import { apiRoute, postRequest } from './util';

/** ============================ Routes =================================== */
const registrationRoute = (rest) => apiRoute.restAuth(`registration/${rest}`);
const routes = {
  login: apiRoute.restAuth('login/'),
  logout: apiRoute.restAuth('logout/'),
  registration: {
    resendVerification: registrationRoute('resend-verification/'),
    signup: registrationRoute(''),
    verifyEmail: registrationRoute('verify-email/'),
  },
};

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

export async function logout() {
  return await postRequest(routes.logout);
}

export async function signUp(
  email,
  password1,
  password2,
  username
) {
  const requestBody = { email, password1, password2, username };
  const response = await postRequest(routes.registration.signup, requestBody);
  const json = await response.json();
  return {
    response,
    error: (json.username ||
      json.password1 ||
      json.password2 ||
      json.email ||
      json.non_field_errors ||
      [])[0],
  };
}

