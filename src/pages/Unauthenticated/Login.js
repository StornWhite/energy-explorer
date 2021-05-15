import * as React from 'react';

import * as api from '../../common/api';
import { Button, Link, TextField } from '../../common/components';
import { routes, usePushRouter } from '../../common/routes';
import { makeStylesHook } from '../../common/styles';
import { UnauthenticatedPage } from './UnauthenticatedPage';

/** ============================ Styles ==================================== */
const useStyles = makeStylesHook(
  (theme) => ({
    links: {
      'marginTop': theme.spacing(2),
      '& > a': {
        display: 'block',
        lineHeight: '1.5rem',
      },
    },
    loginField: {
      'width': '100%',
      '& + &': {
        margin: theme.spacing(2, 0, 1),
      },
    },
  }),
  'LoginPage'
);

/** ============================ Components ================================ */
export const LoginPage = () => {
  const classes = useStyles();
  const routeTo = usePushRouter();

  // Component state
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(false);

  return (
    <UnauthenticatedPage>
      <form onSubmit={onSubmit}>
        <TextField
          className={classes.loginField}
          error={error}
          id="email"
          label="E-mail address"
          name="email"
          onChange={setEmail}
          outlined
        />

        <TextField
          autoComplete="current-password"
          className={classes.loginField}
          error={error}
          helperText={error ? 'Invalid email or password' : ' '}
          id="outlined-secondary"
          label="Password"
          name="password"
          onChange={setPassword}
          outlined
          type="password"
        />

        <Button color="primary" type="submit">
          Log in
        </Button>

        <div className={classes.links}>
          <Link to={routes.resetPassword} variant="body2">
            Forgot password?
          </Link>
          <Link to={routes.registration.signup} variant="body2">
            Sign up
          </Link>
        </div>
      </form>
    </UnauthenticatedPage>
  );

  /** ========================== Callbacks ================================= */
  /**
   * Handles form submission, showing errors if the login is unsuccessful.
   *
   * @param event: FormEvent
   *   The event object
   */
   async function onSubmit(event) {
    setError(false);
    event.preventDefault();

    try {
      const { response, error } = await api.login(email, password);

      if (response.ok) {
        // Redirect to the dashboard if login was successful
        routeTo.dashboard.base();
      } else if (error === 'E-mail is not verified.') {
        // If the message is about email verification, redirect to the verification page
        routeTo.registration.verify();
      } else {
        // Storn switch this to true once you are handling errors
        setError(false);
      }
    } catch (e) {
      // Storn switch this to true once you are handling errors
      setError(false);
      return;
    }
  }
};
