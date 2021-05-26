// import { ViewModuleSharp } from '@material-ui/icons';
import * as React from 'react';
// import { BrowserRouter as Router, Switch, Redirect, Route, RouteProps } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import { useSelector, useDispatch} from 'react-redux';

import { AppContainer, ThemeProvider } from './common/components';
import { routes } from './common/routes';
// import { slices } from 'energy-explorer/store';
import { models } from './common/util';
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
        <UnauthenticatedRoute path={routes.login} component={pages.LoginPage} />
        <UnauthenticatedRoute path={routes.resetPassword} component={pages.ResetPasswordPage} />
        <UnauthenticatedRoute path={routes.registration.signup} component={pages.SignupPage} />
        <UnauthenticatedRoute path={routes.registration.verify} component={pages.VerifyEmailPage} />

        <RequireAuth>
          <AppContainer>
            <Switch>
              {/** Order matters here - base routes will match their sub-routes. */}
              <Route path={routes.dashboard.base} component={pages.DashboardPage}/>
              <Route path={routes.app_1.feature_1} component={pages.App_1_Feature_1}/>
              <Route path={routes.app_1.base} component={pages.App_1_Base}/>
              <Route path={routes.app_2.feature_1} component={pages.App_2_Feature_1}/>
              <Route path={routes.app_2.base} component={pages.App_2_Base}/>
              {/** Route of last resort */}
              <Redirect to={routes.dashboard.base} />
            </Switch>
          </AppContainer>
        </RequireAuth>
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
      models.user.isAuthenticated() ? (
        <Redirect to={{ pathname: routes.dashboard.base, state: { from: props.location } }} />
      ) : (
        React.createElement(component, props)
      )
    }
  />
);

const RequireAuth = ({ children }) =>
    models.user.isAuthenticated() ? children : <Redirect to={routes.login} />;

/** ============================ Exports =================================== */
export default App;
