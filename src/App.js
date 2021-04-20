import * as React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route, RouteProps } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';

// Storn: need to create the components, routesm slices, models, pages below
// Also, leaving out AlertSnackbar for now
// import { AppContainer, ThemeProvider } from 'energy-explorer/components'
import { ThemeProvider } from './common/components/ThemeProvider'
// import { routes } from 'energy-explorer/routes';
// import { slices } from 'energy-explorer/store';
// import { models } from 'energy-explorer/util';
// import * as pages from './pages';

// These are the old imports from the default react app
import logo from './logo.svg';
import './App.css';

// This is the app that shipped with React
export const OldApp = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello World<br />
          You Must Obey Storn
        </a>
      </header>
    </div>
  );
}

/** ============================ Components ================================ */
/**
 * This is separated from the 'App' component so that we can provide a different router inside
 * tests.  This enables us to test that we transistion from page to page successfully.
 * Note: Storn copied this without understanding it.
 */
export const AppRoutes = () => {
  return (
    <ThemeProvider>
      <OldApp />
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
