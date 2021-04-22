/**
 * This module provides a single source of valid routes for the application.
 */

/** ============================ Routes ==================================== */
const login = '/login';
const resetPassword = '/reset_password';
const registration = {
    signup: '/registration/signup',
    verify: '/registration/verify',
  };

/** ============================ Routes Object ============================= */
export const routes = {
  login,
  resetPassword,
  registration
};
