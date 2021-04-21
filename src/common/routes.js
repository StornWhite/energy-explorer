/** ============================ Authentications Routes ============================== */
const login = '/login';
const resetPassword = '/reset_password';
const registration = {
    signup: '/registration/signup',
  
    // BEWARE!! This route is referenced explicitly on the back end. Changing it
    // here without changing it there will COMPLETELY BREAK SIGN UP!
    verify: '/registration/verify',
  };

/** ============================ Routes Object ============================= */
export const routes = {
  login,
  resetPassword,
  registration
};
