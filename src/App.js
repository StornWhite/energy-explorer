import * as React from 'react';
// import { BrowserRouter as Router, Switch, Redirect, Route, RouteProps } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import { useSelector, useDispatch} from 'react-redux';

// import { AppContainer, ThemeProvider } from 'energy-explorer/components'
import ThemeProvider from './common/components/ThemeProvider';
import { routes } from './common/routes';
// import { slices } from 'energy-explorer/store';
// import { models } from 'energy-explorer/util';
import * as pages from './pages';

/** ============================ Components ================================ */
/**
 * This is separated from the 'App' component so that we can provide a different router inside
 * tests.  This enables us to test that we transistion from page to page successfully.
 */
export const AppRoutes = () => {
  return (
    <ThemeProvider>
      <Switch>
        <Route path={routes.login} component={pages.LoginPage} />
        <Route path={routes.resetPassword} component={pages.ResetPasswordPage} />
        <Route path={routes.registration.signup} component={pages.SignupPage} />
        <Route path={routes.registration.verify} component={pages.VerifyEmailPage} />
        <Route path={routes.dashboard.base} component={pages.DashboardPage} />
        {/** Route of last resort */}
        <Redirect to={routes.dashboard.base} />
      </Switch>
    </ThemeProvider>
  );
}

/**
 * The applictation's root component, which is not rendered by tests.
 * Note: Storn copied this also, without understanding it.
 */
const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

/** ============================ Exports =================================== */
export default App;
