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

/** ============================ App1 Routes =============================== */
const app_1_Base = '/app_1';
const app_1 = {
  base: app_1_Base,
  feature_1: `${app_1_Base}/feature_1`,
  feature_2: (id) => `${app_1_Base}/${id}`,
};

/** ============================ App2 Routes =============================== */
const app_2_Base = '/app_2';
const app_2 = {
  base: app_2_Base,
  feature_1: `${app_2_Base}/feature_1`,
  feature_2: (id) => `${app_2_Base}/${id}`,
};

/** ============================ Routes Object ============================= */
export const routes = {
  login,
  resetPassword,
  registration,
  dashboard,
  app_1,
  app_2
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

        app_1: {
        base: () => routerFn(routes.app_1.base),
        feature_1: () => routerFn(routes.app_1.feature_1),
        },

        app_2: {
          base: () => routerFn(routes.app_1.base),
          feature_2: () => routerFn(routes.app_1.feature_2),
        },
 
         // Special route, allowing components to link to a page using the route string. This should be
         // used as an option of last resort.
         page: (route) => () => routerFn(route),
       }),
       [routerFn]
     );
   };
 }
 