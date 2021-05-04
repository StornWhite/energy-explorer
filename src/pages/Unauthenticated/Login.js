import * as React from 'react';

//import * as api from 'navigader/api';
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
      <form>
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

};
