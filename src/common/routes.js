/**
 * This module provides a single source of valid routes for the application.
 */
 //import _ from 'lodash';
 import * as React from 'react';
 import { useHistory } from 'react-router-dom';

/** ============================ Authentication Routes ===================== */
const login = '/login';
const resetPassword = '/reset_password';
const registration = {
    signup: '/registration/signup',
    verify: '/registration/verify',
};

/** ============================ Dashboard Routes ========================== */
const dashboardBase = '/dashboard';
const dashboard = {
  base: dashboardBase
};

/** ============================ Routes Object ============================= */
export const routes = {
  dashboard,
  login,
  resetPassword,
  registration
};

/** ============================ Hook ====================================== */
/**
 * Provides a standardized way of navigating between pages in the application. Components that need
 * to navigate to another page can call `useRouter`, and then choose where to go from the options
 * provided in the returned object.
 */
 export const usePushRouter = routerFactory('push');
 export const useRedirectRouter = routerFactory('replace');
 
 function routerFactory(method) {
   return () => {
     const routerFn = useHistory()[method];
     return React.useMemo(
       () => ({

        dashboard: {
          base: () => routerFn(routes.dashboard.base)
        },
 
         login: () => routerFn(routes.login),
 
         registration: {
           signup: () => routerFn(routes.registration.signup),
           verify: () => routerFn(routes.registration.verify),
         },
 
         // Special route, allowing components to link to a page using the route string. This should be
         // used as an option of last resort.
         page: (route) => () => routerFn(route),
       }),
       [routerFn]
     );
   };
 }
 