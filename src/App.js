import * as React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route, RouteProps } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';

// Storn: need to create the components, routesm slices, models, pages below
// Also, leaving out AlertSnackbar for now
// import { AppContainer, ThemeProvider } from 'energy-explorer/components'
import { ThemeProvider } from './common/components/ThemeProvider'
import { routes } from './common/routes';
// import { slices } from 'energy-explorer/store';
// import { models } from 'energy-explorer/util';
import * as pages from './pages';


/** ============================ Components ================================ */
/**
 * This is separated from the 'App' component so that we can provide a different router inside
 * tests.  This enables us to test that we transistion from page to page successfully.
 * Note: Storn copied this without understanding it.
 */
export const AppRoutes = () => {
  return (
    <ThemeProvider>
      <Switch>
        <UnauthenticatedRoute path={routes.login} component={pages.LoginPage} />
        <UnauthenticatedRoute path={routes.resetPassword} component={pages.ResetPasswordPage} />
        <UnauthenticatedRoute path={routes.registration.signup} component={pages.SignupPage} />
        <UnauthenticatedRoute path={routes.registration.verify} component={pages.VerifyEmailPage} />
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

/** ============================ Callbacks ================================= */
const UnauthenticatedRoute = ({ component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>  
        React.createElement(component, props)
    }
  />
);

/** ============================ Exports =================================== */
export default App;
